import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Accordion Component', () => {
    // Section Data
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]

    // Smoke Test
    it('renders without errors', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Accordion />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    // Snapshots
    it('renders empty given no props', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no sections active by default', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(0).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('only renders last section when multiple clicked', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})