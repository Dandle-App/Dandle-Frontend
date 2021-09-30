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
    values = {companyName: "Dandle Group", companyEmail: "dandle@msudenver.edu", companyPhoneNumber: "303", orgCode: "dandle",
              password: "dandle", address: "777 Lawrence St.", city: "Denver",
              state: "CO", country: "United States", zipCode: "80204"}
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
                                onChangeText={handleChange('name')}
                            />
                            <StyldTextInput
                                label="Company Email"
                                placeholder="johndoe@acme.com"
                                keyboardType="email-address"
                            />
                            <StyldTextInput
                                label="Company Phone No"
                                placeholder="303 309 9200"
                            />
                            <StyldTextInput
                                label="Org Code"
                                placeholder="ACME101"
                                autoCapitalize="characters"
                            />
                            <StyldTextInput
                                label="Password"
                                placeholder="* * * * * * *"
                                secureTextEntry={true}
                            />
                            <StyldTextInput
                                label="Confirm Password"
                                placeholder="* * * * * * *"
                                secureTextEntry={true}
                            />
                            <StyldTextInput
                                label="Address"
                                placeholder="123 Main St"
                            />
                            <FlexHoriztal>
                              <StyldTextInput
                                  label="City"
                                  placeholder="Denver"
                              />
                              <StyldTextInput
                                  label="State"
                                  placeholder="CO"
                              />
                            </FlexHoriztal>
                            <FlexHoriztal>
                              <StyldTextInput
                                  label="Country"
                                  placeholder="United States"
                              />
                              <StyldTextInput
                                  label="Zip Code"
                                  placeholder="90210"
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