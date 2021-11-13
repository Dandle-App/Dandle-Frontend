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
    /* Posible tests needed
    style tests:
        StyledContainer, InnerContainer, AppLogo, Header1
        Header2, StyledButton, TextLink, Header3, LightContainer
    navigation - does Continue button go the SignIn
    navigation - does the "I am an org/comp" go OrgSignIn
    */
})