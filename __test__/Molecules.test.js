import React from 'react';
import {cleanup, render, fireEvent, waitFor} from '@testing-library/react-native';
import { toHaveStyle } from "@testing-library/jest-native";
import styled from 'styled-components';
import NavigationContainer from '@react-navigation/native';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import { StyldTextInput, OrderCard } from '../components/molecules/Molecules';

afterEach(cleanup);

describe('Molecules', () => {
    describe("StyledTextInput", () => {
        it('renders correctly', () =>{
            const tree = renderer.create(
                <div>
                    <StyldTextInput
                        label="Username"
                        placeholder="johndoe"
                        value="FakeName"
                    />
                    <StyldTextInput
                        label="Hidden Password"
                        placeholder="* * * * * * *"
                        secureTextEntry={true}
                        value="fakePassword"
                        isPassword={true}
                        hidePassword={true}
                        setHidePassword={true}
                    />
                    <StyldTextInput
                        label="Plain Password"
                        placeholder="* * * * * * *"
                        secureTextEntry={true}
                        value="fakePassword"
                        isPassword={true}
                        hidePassword={false}
                        setHidePassword={false}
                    />
                    <StyldTextInput
                        label="Hidden Password"
                        placeholder="* * * * * * *"
                        secureTextEntry={true}
                        value="fakePassword"
                        isPassword={true}
                        hidePassword={false}
                        setHidePassword={true}
                    />
                </div>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe("OrderCard", () => {
        it("renders correctly", () => {
            const tree = renderer.create(
                <div>
                <OrderCard
                    key={'20180101203000'}
                    order = {
                        orderDate = '2018-01-01:20:30:00',
                        orderStatus = 'Pending',
                        customerName = 'Mbami Luka',
                        orderTotal = '$1,000.00'
                    }
                />
                </div>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});