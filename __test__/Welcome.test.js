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
    // Test to see if every component is styled correctly
    it('StyledContainer styled corretly', () => {
        const StyledContainer ={
            "backgroundColor": "#630101",
            "flexBasis": 0,
            "flexGrow": 1,
            "flexShrink": 1,
            "paddingBottom": 24,
            "paddingLeft": 24,
            "paddingRight": 24,
            "paddingTop": 24,
        };
        expect(StyledContainer).toMatchSnapshot();
    })
    it('StatusBar styled light', () => {
        const StatusBar = {
            "backgroundColor": "transparent",
            "flex": 1,
            "position": "relative",
        }
        expect(StatusBar).toMatchSnapshot();
    })
    it('Swiper syled', () => {
        const Swiper = {
            "backgroundColor": "transparent",
        }
        expect(Swiper).toMatchSnapshot();
    })
    it('AppLogo stlyed', () => {
        const AppLogo = {
            "height": 1334,
            "width": 750,
            "backgroundColor": "transparent",
        }
        expect(AppLogo).toMatchSnapshot();
    })
    /* Posible tests needed
    style tests:
        InnerContainer, AppLogo, Header1
        Header2, StyledButton, TextLink, Header3, LightContainer
    navigation - does Continue button go the SignIn
    navigation - does the "I am an org/comp" go OrgSignIn
    */
})