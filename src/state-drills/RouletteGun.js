import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };
    state = {
        chamber: null,
        spinningTheChamber: false,
    }
    pullTrigger = () => {
        this.setState({
            spinningTheChamber: true,
        });
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
        }, 2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
          return 'BANG!!!!!'
        } else {
          return 'you\'re safe!'
        }
    }
    render () {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.pullTrigger}>Pull the trigger!</button>
            </div>
        );
    }
}

export default RouletteGun;