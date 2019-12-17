import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {sections: []};
    state = {activeSection: null};

    handleClick (index) {
        this.setState({activeSection: index})
    }

    renderList () {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleClick(index)}>
                    {section.title}
                </button>
                {this.state.activeSection === index && <p>{section.content}</p>}
            </li>
        ))
    }

    render () {
        return (
            <ul>
                {!!this.props.sections.length && this.renderList()}
            </ul>
        )
    }
}

export default Accordion;