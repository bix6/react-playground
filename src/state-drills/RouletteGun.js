import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };
    state = {
        message: "Hello",
        chamber: null,
        spinningTheChamber: false,
    }
    pullTrigger = () => {
        this.setState({
            spinningTheChamber: true,
            message: 'Spinning the chamber and pulling the trigger!...'
        });
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
            if (this.state.chamber === this.props.bulletInChamber) {
                this.setState({message: "Bang!!"})
            }
            else {
                this.setState({message: "You're Safe"})
            }
        }, 2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    render () {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.pullTrigger}>Pull the trigger!</button>
            </div>
        );
    }
}

export default RouletteGun;