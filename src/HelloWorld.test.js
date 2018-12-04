import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
    const name = 'Person';
    const mockRemoveGreeting = jest.fn();
    const component = shallow(<HelloWorld name={name} removeGreeting={mockRemoveGreeting}/>);

    it('renders and matches our snapshot', () => {
        const helloWorld = renderer.create(
            <HelloWorld name="Person" />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})