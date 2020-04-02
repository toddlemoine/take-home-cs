import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('is a div with text', () => {
  const subj = shallow(<App />)
  expect(subj.name()).toEqual('div');
  expect(subj.text()).toEqual('it works');
});
