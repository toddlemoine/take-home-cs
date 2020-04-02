import React from 'react';
import { shallow } from 'enzyme';
import { ConfigurableSequenceTable } from './ConfigurableSequenceTable';

describe('ConfigurableSequenceTable', () => {
  const props = () => ({
    onConfigureClick: jest.fn(x => true)
  });

  test('is a div with a css class', () => {
    const subj = shallow(<ConfigurableSequenceTable />);
    expect(subj.name()).toEqual('div');
    expect(subj.hasClass('configurable-sequence-table')).toBe(true);
  });
  
  test('notifies parent when Configure button is clicked', () => {
    const testProps = props()
    const subj = shallow(<ConfigurableSequenceTable {...testProps} />);
    const btn = subj.find('button');
    btn.simulate('click');
    expect(testProps.onConfigureClick.mock.calls.length).toBe(1);
  })
})
