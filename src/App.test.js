import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should contain 1 p element and h1 text', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('p').length).toBe(1)
    expect(wrapper.find('h1').text()).toBe('Welcome to React')
  })
})  
