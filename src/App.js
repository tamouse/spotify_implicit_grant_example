import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: props.credentials
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Yay, logged in!</h1>
                <textarea rows="20" cols="60" defaultValue={JSON.stringify(this.state.credentials,null,2)} />
            </div>
        );
    }
}

export default App;
