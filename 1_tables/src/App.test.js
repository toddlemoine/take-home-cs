import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

test('is a div', () => {
  const subj = shallow(<App />)
  expect(subj.name()).toEqual('div');
});


test('it has a customizable text message', () => {
  const subj = shallow(<App text="Boop" />)
  expect(subj.text()).toEqual('Boop');
})
