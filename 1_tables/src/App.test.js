import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';


describe('App', () => {
  
  const props = () => ({
    text: 'Boop',
    sequences: []
  })


test('is a div', () => {
  const subj = shallow(<App {...props()} />)
  expect(subj.name()).toEqual('div');
});


test('it has a customizable text message', () => {
  const subj = shallow(<App {...props()} />)
  expect(subj.text()).toEqual('Boop');
})

})
