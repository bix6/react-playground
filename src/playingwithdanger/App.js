import React from 'react';
import Currency from './Currency';
import CurrencyError from './CurrencyError';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Here are some currency values</h1>
                <CurrencyError>
                    Germany: <Currency value={21} locale="de-DE" currency="US" />
                </CurrencyError>
                <CurrencyError> 
                    USA: <Currency value={21} locale="en-US" currency="USD" />
                </CurrencyError>
                <h2>The currency values displayed are famous</h2>
            </div>
        );
    }
}

export default App;