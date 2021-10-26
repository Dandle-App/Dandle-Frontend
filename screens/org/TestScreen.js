import React from "react";
import { Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { Formik, Form } from "formik";
import { 
        LightContainer, PadlessContainer, FlexHoriztal,
        Header1, Header2, Header3, TextLight,
        AppLogo, StlyedButton,
        Pad_h_medium, Pad_h_small, Pad_w_small } from "../../styles/styles";
import { TextLink } from "../../components/atoms/Atoms";
import { StyldTextInput } from "../../components/molecules/Molecules";
import { StyledFormArea } from "../../components/organisms/Organisms";
import axios from "axios";

import {selectToken} from "../../features/user/userSlice";
import * as SecureStore from "expo-secure-store";

let token_ = '';

const checkToken = async() => {
    try {
        SecureStore.getItemAsync("token").then(token => {
            token_ = token;
            console.log('\x1b[35mTOKEN from SecureStore: ' + token + '\x1b[0m');
        })
    } catch (error) {
        console.log(error);
    }
    
}

const TestScreen = ({navigation}) => {;
    return (
        <LightContainer>
            <StatusBar style="auto" />
            <PadlessContainer>
                
                <FlexHoriztal>
                    <Header1>Test Screen</Header1>
                </FlexHoriztal>
                <Pad_h_medium />
                <Text>See console for result of click</Text>
                <Text>{token_}</Text>
                <Pad_h_medium /><Pad_h_medium />
                <StlyedButton width='60%' onPress={() => checkToken()}><TextLight>Click me</TextLight></StlyedButton>
            </PadlessContainer>
        </LightContainer>
    );
}

export default TestScreen;