import React from 'react';
import {renderer} from 'react-test-renderer';
import 'jest-styled-components'
import OrgSignUp from '../screens/OrgSignUp';

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  handleSubmit: {
    values: jest.values
  },
  ...props
});

/* 
Jest Snapshots : https://jestjs.io/docs/snapshot-testing
To update a snapshot due to changed implementation: jest --updateSnapshot
*/
// async snapshot
it('renders correctly', () => {
    let tree 
    let props
    beforeEach(() => {
        props = createTestProps({});
    });
    tree = renderer.create(<OrgSignUp {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });