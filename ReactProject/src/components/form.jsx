import { Component } from "react";

export class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', errorMessage: '' };
    }

    // changeUsername = (event) => {
    //     this.setState({ username: event.target.value });
    //     console.log("changeUsername -> State info: ", this.state);
    // }
    // changePasssword = (event) => {
    //     this.setState({ password: event.target.value });
    //     console.log("changePasssword ->  State info: ", this.state);
    // }

    updateField = (event) => {
        let fieldName = event.target.name;

        if (fieldName === 'username') {
            if (fieldName.length > 3) {
                this.setState({ errorMessage: "Username must be of length > 3" });
            }
        }
        console.log(fieldName);
        this.setState({ [fieldName]: event.target.value });
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log("Submit clicked!", this.state);

    }

    render() {
        let submitButton = '', hasError = '';
        if (this.state.username && this.state.password) {
            submitButton = <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>;
        }

        if(this.state.errorMessage){
            hasError = <div className="alert alert-danger">{this.state.errorMessage}</div>
        }
        return (
            <div className="container">
                <h2> Simple Login Form </h2>
                {hasError}
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input type="text" className="form-control" name="username" placeholder="Please enter your username" onBlur={this.updateField} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwprd">Password</label>
                        <input type="text" className="form-control" name="password" placeholder="Password here" onBlur={this.updateField} />
                    </div>
                    {submitButton}
                </form>
            </div>
        );
    }
}