import React from "react";
import { Text, TextInput, FlatList, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { Formik, Form } from "formik";
import { 
        LightContainer, PadlessContainer, FlexHoriztal,
        Header1, Header2, Header3, TextLight,
        AppLogo, StlyedButton,
        Pad_h_medium, Pad_h_small, Pad_w_small } from "../../styles/styles";
import { TextLink } from "../../components/atoms/Atoms";
import { OrderFilter, StyldTextInput } from "../../features/orderFilter/orderFilter";
import { StyledFormArea } from "../../components/organisms/Organisms";

import { deleteToken } from "../../features/user/User";
import axios from "axios";
import io from "socket.io-client";

import {Orders} from "../../features/orders/Orders";

const socket = io("");

const OrgHomeScreen = ({navigation}) => {
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