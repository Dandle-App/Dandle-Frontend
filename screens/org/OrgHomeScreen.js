import React from "react";
import { Text, TextInput } from "react-native";
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

OrgHomeScreen = ({navigation}) => {
    return (
        <LightContainer>
            <StatusBar style="auto" />
            <PadlessContainer>
                <FlexHoriztal>
                    <AppLogo />
                    <Header1>OrgName</Header1>
                </FlexHoriztal>
            </PadlessContainer>
        </LightContainer>
    );
}

export default OrgHomeScreen;