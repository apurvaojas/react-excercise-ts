import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';


// const title = 'Test Title';
let wrapped = shallow<{}>(<App/>);

describe('renders learn react link', () => {
  
  it('renders learn react link', () => { 
    expect(wrapped.find('a').text()).toEqual("Learn React");
  });
});
