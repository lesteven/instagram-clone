import PageTemplate from './PageTemplate';
import React from 'react';
import * as testSetup from '../../../../test-setup.js';
import { render, shallow, mount } from 'enzyme';


/*
describe('client template', () => {
  it('should have text', () => {
    expect(render(<PageTemplate />).text()).toEqual('template');
  })
  it('should have css .max-wdith', () => {
    expect(shallow(<PageTemplate />).is('.max-width')).toBe(true);
  })
  it('should render', () => {
    expect(mount(<PageTemplate />)
    .find('.max-width')
    .length)
    .toBe(1);
  })
})
*/

describe('client template', () => {
  it('should have text', () => {
    expect(render(<PageTemplate />).text()).toBeTruthy;
  })
})
