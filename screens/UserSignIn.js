import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { 
        LightContainer, InnerContainer, Header1, 
        Header2, Header3, AppLogoRed, AppLogo, StyledContainer, PadlessContainer,
        Pad_h_medium, Padding_h_small, ScanButton, PlainText } from "../styles/styles";
/* 
Expo Barcode Scanner
How to:
https://reactnativemaster.com/react-native-qr-code-scanner-using-expo/
*/
const logo_img = require("../assets/logo_red.png");


const UserSignIn = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`${data}`);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <LightContainer>
      <StatusBar style="Dark" />
      <PadlessContainer>
        <AppLogoRed source = {logo_img}/>
        <Header1>Find and scan your QR Code</Header1>
      </PadlessContainer>
      <Pad_h_medium />
      <InnerContainer>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <ScanButton 
        onPress={() => setScanned(false)}>
          <Text>Retry Scan</Text>
           </ScanButton>}
      </InnerContainer>
      <Pad_h_medium/>
    </LightContainer>
  );
}

export default UserSignIn;