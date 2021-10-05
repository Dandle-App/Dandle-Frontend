import React from 'react';
import styled from 'styled-components';
import Constants from 'expo-constants';
import { View, Text, Image, TouchableOpacity } from "react-native";

export const StyledFormArea = styled.View(
    ({center,justify,alignItems}) => `
    width: 90%;
    justifyContent: ${justify || 'flex-start'};
    `
);