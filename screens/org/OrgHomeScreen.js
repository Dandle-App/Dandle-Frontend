import React, {useState, useEffect} from "react";
import { Text, TextInput, FlatList, Platform, Switch, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { Formik, Form } from "formik";
import { 
        LightContainer, PadlessContainer, FlexHoriztal,
        Header1, Header2, Header3, TextLight,
        AppLogo, StlyedButton,
        Pad_h_medium, Pad_h_small, Pad_w_small } from "../../styles/styles";
import * as ImagePicker from 'expo-image-picker';
import { TextLink } from "../../components/atoms/Atoms";
import { OrderFilter } from "../../features/orderFilter/orderFilter";
import { StyledFormArea } from "../../components/organisms/Organisms";

import { deleteToken } from "../../features/user/User";
import axios from "axios";
import io from "socket.io-client";

import {Orders} from "../../features/orders/Orders";

const socket = io("");

const OrgHomeScreen = ({navigation}) => {

    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const dispatch = useDispatch();

    function handleSwitchChange(isSwitchOn) {
        setIsSwitchOn(!isSwitchOn);
        if (isSwitchOn) {
            socket.connect();
            socket.emit("join", "org");
            socket.on("org", (data) => {
                console.log("data", data);
            });
        } else {
            socket.disconnect();
        }
    }
    return (
        <LightContainer>
            <StatusBar style="auto" />
            <PadlessContainer>
                <TouchableOpacity onPress={pickImage} style={{alignSelf: 'center', width: '40%', aspectRatio: 1, borderRadius: 100, borderWidth: 1, borderColor: '9e9e9e'}}>
                    {image && <Image source={{ uri: image }} style={{alignSelf: 'center', width: '100%', aspectRatio: 1, borderRadius: 100}} />}  
                </TouchableOpacity>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={false ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onChange={() => handleSwitchChange(isSwitchOn)}
                    value={isSwitchOn}
                />
                <OrderFilter tabs={['todo','in-progress','done']}/>
                <Orders/>
            </PadlessContainer>
        </LightContainer>
    );
}

export default OrgHomeScreen;