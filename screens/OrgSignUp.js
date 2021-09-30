import React from "react";
import { View,Text } from "react-native";
import KeyboardAvoidingWrapper from "../components/organisms/KeyboardAvoidingWrapper";
import { Formik, Form } from "formik";
import { StatusBar } from 'expo-status-bar';
import { LightContainer, InnerContainer, PadlessContainer,
        Header1, Header2, TextLight, 
        AppLogoRed, StlyedButton,
        Pad_h_medium, FlexHoriztal, Pad_h_small} from "../styles/styles";

import { StyldTextInput } from "../components/molecules/Molecules";
import { StyledFormArea } from "../components/organisms/Organisms";
import axios from "axios";

const logo_img = require("../assets/logo_red.png");


const OrgSignUp = ({navigation}) => {
  //write a handleSubmit function
  const handleSubmit = (values) => {

    console.log(values);
    const url = "http://localhost:3000/v1/orgs/signup";
    axios.post(url, values)
    .then(res => {
        console.log(res);
    })
  }
  return (
    <KeyboardAvoidingWrapper>
        <LightContainer>
            <StatusBar style="dark" />
            <PadlessContainer>
                <Formik
                    initialValues={{
                        companyName: "",
                        companyEmail: "",
                        companyPhoneNumber: "",
                        orgCode: "",
                        password: "",
                        confirmPassword: "",
                        address: "",
                        city: "",
                        state: "",
                        country: "",
                        zipCode: ""
                    }}
                    onSubmit={(values) => {
                    navigation.navigate("OrgSignIn");
                    handleSubmit(values);
                    }}
                >
                    {
                        ({handleChange, handleBlur, handleSubmit, values}) => (
                            <StyledFormArea>
                                <StyldTextInput
                                    label="Company Name"
                                    placeholder="John Doe"
                                    onChangeText={handleChange("companyName")}
                                    value={values.companyName}
                                />
                                <StyldTextInput
                                    label="Company Email"
                                    placeholder="johndoe@acme.com"
                                    keyboardType="email-address"
                                    onChangeText={handleChange("companyEmail")}
                                    value={values.companyEmail}
                                />
                                <StyldTextInput
                                    label="Company Phone No"
                                    placeholder="303 309 9200"
                                    onChangeText={handleChange("companyPhoneNumber")}
                                    value={values.companyPhoneNumber}
                                />
                                <StyldTextInput
                                    label="Org Code"
                                    placeholder="ACME101"
                                    autoCapitalize="characters"
                                    onChangeText={handleChange("orgCode")}
                                    value={values.orgCode}
                                />
                                <StyldTextInput
                                    label="Password"
                                    placeholder="* * * * * * *"
                                    secureTextEntry={true}
                                    onChangeText={handleChange("password")}
                                    value={values.password}
                                />
                                <StyldTextInput
                                    label="Confirm Password"
                                    placeholder="* * * * * * *"
                                    secureTextEntry={true}
                                    onChangeText={handleChange("confirmPassword")}
                                    value={values.confirmPassword}
                                />
                                <StyldTextInput
                                    label="Address"
                                    placeholder="123 Main St"
                                    onChangeText={handleChange("address")}
                                    value={values.address}
                                />
                                <FlexHoriztal>
                                <StyldTextInput
                                    label="City"
                                    placeholder="Denver"
                                    onChangeText={handleChange("city")}
                                    value={values.city}
                                />
                                <StyldTextInput
                                    label="State"
                                    placeholder="CO"
                                    onChangeText={handleChange("state")}
                                    value={values.state}
                                />
                                </FlexHoriztal>
                                <FlexHoriztal>
                                <StyldTextInput
                                    label="Country"
                                    placeholder="United States"
                                    onChangeText={handleChange("country")}
                                    value={values.country}
                                />
                                <StyldTextInput
                                    label="Zip Code"
                                    placeholder="90210"
                                    onChangeText={handleChange("zipCode")}
                                    value={values.zipCode}
                                />
                                </FlexHoriztal>
                                <FlexHoriztal>
                                    <StlyedButton onPress={handleSubmit}>
                                        <TextLight>sign up</TextLight>
                                    </StlyedButton>
                                </FlexHoriztal>
                            </StyledFormArea>
                        )
                    }
                </Formik>    
            </PadlessContainer>
        </LightContainer>
    </KeyboardAvoidingWrapper>
  );
}

export default OrgSignUp;