import React, {Component} from 'react';
import './Err.css'

class Err extends Component {

    render() {
        return(
            <div className="Err">
                <h1>Woops!</h1>
                <p>An error occured when logging in to Spotify.</p>
                <p>Try again later.</p>
                <textarea rows="20" cols="60" defaultValue={JSON.stringify(this.props.errors,null,2)} />
            </div>
        )
    }

}

export default Err