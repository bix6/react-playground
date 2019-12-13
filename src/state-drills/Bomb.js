import React from 'react';

class Bomb extends React.Component {
    state = {
        text: 'Tick',
        count: 0
    };
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count + 1})
            if (this.state.count >= 8) {
                this.setState({text: 'BOOM!!'})
                clearInterval(this.interval);
            }
            else if (this.state.count % 2 === 0) {
                this.setState({text: 'Tick'})
            }
            else {
                this.setState({text: 'Tock'})
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render () {
        return (
            <div>
                <p>{this.state.text}</p>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Bomb;