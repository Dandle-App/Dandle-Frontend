import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import renderer from 'react-test-renderer';
import Welcome from '../screens/Welcome';

describe('Welcome', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Welcome />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    /* TO-DO navigation testing
    describe('continue button'), () => {
        it('navigates to OrgSignIn', () => {
            const push = jest.fn();
            const { getByText } = render(<welcome navigation={{ push }} />);
            fireEvent.press(getByText('Continue'));
            expect(push).toHaveBeenCalledWith("OrgSignIn");
        });

        it('renders the correct screen', async () => {
            const { getByText } = render(
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
            );
            await waitFor(() => getByText('OrgSignIn'));
        });
    });
    */
});