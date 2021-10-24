import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import { toHaveStyle } from "@testing-library/jest-native";

import Welcome from '../screens/Welcome';

afterEach(cleanup);

describe('Welcome', () => {
    it('it works', () => {
        expect(true).toBeTruthy();
    });
})