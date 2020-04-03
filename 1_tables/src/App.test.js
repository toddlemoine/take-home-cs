import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';


describe('App', () => {
  
  const props = () => ({
    sequences: []
  })

  test('is a div', () => {
    const subj = shallow(<App {...props()} />)
    expect(subj.name()).toEqual('div');
  });

})
