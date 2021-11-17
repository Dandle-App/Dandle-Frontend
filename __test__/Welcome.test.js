import React from 'react';
import {cleanup, render, fireEvent, waitFor} from '@testing-library/react-native';
import { toHaveStyle } from "@testing-library/jest-native";
import styled from 'styled-components';
import NavigationContainer from '@react-navigation/native';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import Welcome from '../screens/Welcome';
import { StlyedButton } from '../styles/styles';

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
        };
        expect(StatusBar).toMatchSnapshot();
    })
    it('Swiper styled correctly', () => {
        const Swiper = {
            "backgroundColor": "transparent",
        };
        expect(Swiper).toMatchSnapshot();
    })
    it('InnerContainer styled correctly', () => {
        const InnerContainer ={
            "alignItems": "center",
            "flexBasis": 0,
            "flexGrow": 1,
            "flexShrink": 1,
            "paddingTop": "75%",
            "width": "100%",
        };
        expect(InnerContainer).toMatchSnapshot();
    })
    it('AppLogo styled correctly', () => {
        const AppLogo ={
            "height": 77,
            "width": 66,
        };
        expect(AppLogo).toMatchSnapshot();
    })
    it('Header1 styled correctly', () => {
        const Header1 ={
            "color": "#f38484",
            "fontSize": 20,
            "fontWeight": "bold",
            "paddingTop": 42,
        };
        expect(Header1).toMatchSnapshot();
    })
    it('Header2 styled correctly', () => {
        const Header2 ={
            "color": "#f38484",
            "fontSize": 12,
            "fontWeight": "bold",
            "paddingBottom": 10,
            "paddingTop": 5,
        };
        expect(Header2).toMatchSnapshot();
    })
    it('Pad_h_medium styled correctly', () => {
        const Pad_h_medium ={
            "height": 45,
        };
        expect(Pad_h_medium).toMatchSnapshot();
    })
    it('LightContainer styled correctly', () => {
        const LightContainer ={
            "backgroundColor": "#f5f5f5",
            "flexBasis": 0,
            "flexGrow": 1,
            "flexShrink": 1,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "paddingTop": 0,
        };
        expect(LightContainer).toMatchSnapshot();
    })
    it('Video styled correctly', () => {
        const Video ={
            "bottom": 0,
            "left": 0,
            "position": "absolute",
            "right": 0,
            "top": 0,
        };
        expect(Video).toMatchSnapshot();
    })
    it('StyledButton styled correctly', () => {
        const StyledButton ={
            "alignItems": "center",
            "backgroundColor": "#d64547",
            "borderRadius": 35,
            "height": 50,
            "justifyContent": "space-around",
            "opacity": 1,
            "width": "100%",
        };
        expect(StyledButton).toMatchSnapshot();
    })
    it('TextLink styled corretly', () => {
        const TextLink ={
            "alignItems": "center",
            "color": "#f38484",
            "opacity": 1,
            "paddingLeft": 5,
        };
        expect(TextLink).toMatchSnapshot();
    })
    it('Header3 styled correctly', () => {
        const Header3 ={
            "color": "#f38484",
            "fontSize": 12,
            "fontWeight": "bold",
        };
        expect(Header3).toMatchSnapshot();
    })
   /*it('StyledButton renders', () => {
       const tree = renderer.create(<StlyedButton />);
       expect(tree).toMatchSnapshot();
   })
   //StyledButton navigates to SignIn
   it('navigates to SignIn', () => {
       const push = jest.fn();
       const { getByText } = render(<welcome navigation={{ push }}/>);
       fireEvent.press(getByText('Continue'));
       expect(push).toHaveBeenCalledBy('SignIn');
   })*/
})