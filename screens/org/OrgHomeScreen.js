import React from "react";
import { Text, TextInput } from "react-native/";
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

import { deleteToken } from "../../features/user/User";
import axios from "axios";

import {selectToken} from "../../features/user/userSlice";

const OrgHomeScreen = ({navigation}) => {
    return (
        <LightContainer>
            <StatusBar style="auto" />
            <PadlessContainer>
                <FlexHoriztal>
                    <AppLogo />
                    <Header1>OrgName</Header1>
                </FlexHoriztal>
                <Header2></Header2>

                <Pad_h_medium />

                <Pad_h_small/>

                <StlyedButton onPress={ ()=> deleteToken(navigation) } width='75%'>
                    <TextLight>Logout</TextLight>
                </StlyedButton>
            </PadlessContainer>
        </LightContainer>
    );
}

export default OrgHomeScreen;