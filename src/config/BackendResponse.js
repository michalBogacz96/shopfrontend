import React, {Component} from 'react';

class BackendResponse extends Component {

    constructor(props) {
        super();
    }

    render() {

        let style = "";

        if(this.props.status === true) {
            style = "alert alert-success";
        }
        if(this.props.status === false) {
            style = "alert alert-danger";
        }
        
        return (
            <div className="backend-response">
                <div id="message" className={style}>
                    {this.props.message}
                </div>
            </div>
        );
    }
}

export default BackendResponse;