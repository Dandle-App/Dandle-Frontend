import React from 'react';
import {renderer} from 'react-test-renderer';
import 'jest-styled-components'
import OrgSignUp from '../screens/OrgSignUp';

/* 
Jest Snapshots : https://jestjs.io/docs/snapshot-testing
To update a snapshot due to changed implementation: jest --updateSnapshot
*/

describe('OrgSignUp Snapshot', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<OrgSignUp />).toJSON();
      expect(tree).toMatchSnapshot();
  });
})
