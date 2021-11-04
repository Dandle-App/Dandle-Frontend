import React from 'react';
import {cleanup, render, fireEvent, waitFor} from '@testing-library/react-native';
import { toHaveStyle } from "@testing-library/jest-native";
import styled from 'styled-components';
import NavigationContainer from '@react-navigation/native';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import OrgSignUp from '../screens/OrgSignUp';

/* 
Jest Snapshots : https://jestjs.io/docs/snapshot-testing
To update a snapshot due to changed implementation: jest --updateSnapshot
*/
afterEach(cleanup);

describe('OrgSignUp Snapshot', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<OrgSignUp />).toJSON();
      expect(tree).toMatchSnapshot();
  });
});