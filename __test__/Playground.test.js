import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import { toHaveStyle } from "@testing-library/jest-native";
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

import Welcome from '../screens/Welcome.js';



afterEach(cleanup);

describe('Welcome', () => {
    it('it works', () => {
        expect(true).toBeTruthy();
    });
})
