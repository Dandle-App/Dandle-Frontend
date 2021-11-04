import React from 'react';
import {cleanup, render, fireEvent, waitFor} from '@testing-library/react-native';
import { toHaveStyle } from "@testing-library/jest-native";
import styled from 'styled-components';
import NavigationContainer from '@react-navigation/native';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import { MsgBox } from '../components/atoms/Atoms';

afterEach(cleanup);

describe('Atoms', () => {

    it('MsgBox', () =>{
        const tree = renderer.create(
            <div>
            <MsgBox type="success">success</MsgBox>
            <MsgBox type="fail">fail</MsgBox>
            </div>
          ).toJSON();
          expect(tree).toMatchSnapshot();

    });
});