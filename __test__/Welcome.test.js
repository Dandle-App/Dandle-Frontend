import React from 'react';
import {cleanup, render, fireEvent, waitFor} from '@testing-library/react-native';
import { toHaveStyle } from "@testing-library/jest-native";
import styled from 'styled-components';
import NavigationContainer from '@react-navigation/native';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import Welcome from '../screens/Welcome';

afterEach(cleanup); 

describe('Welcome Snapshot', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Welcome />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    // Test to see if styled correctly
    it('Styled corretly', () => {
        const style ={
            "backgroundColor": "#630101",
            "flexBasis": 0,
            "flexGrow": 1,
            "flexShrink": 1,
            "paddingBottom": 24,
            "paddingLeft": 24,
            "paddingRight": 24,
            "paddingTop": 24,
        };
        expect(style).toMatchSnapshot();
    })
    /* Posible tests needed
    style tests:
        StyledContainer, InnerContainer, AppLogo, Header1
        Header2, StyledButton, TextLink, Header3, LightContainer
    navigation - does Continue button go the SignIn
    navigation - does the "I am an org/comp" go OrgSignIn
    */
})