import React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import FormDetails from './form-details'
import '../global.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            worms: 0,
            compost: 0,
            tea: 0,
            shipment: false,
            comment: '',
            email: '',
            submitted: false
        }
    }
    
    toggleSubmit = () => {
        this.setState({ submitted: !this.state.submitted })
    }

    validate = (e) => {
        /* const form = e.target.parentElement;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            return;
        } */
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                console.log('success!');
            })
            .catch(error => alert(error));
        this.toggleSubmit();
        e.preventDefault();
    };

    render() {
        const { worms, compost, tea, delivery, pickup, submitted } = this.state;
        const values = { worms, compost, tea, delivery, pickup };
        return (
            <ReactCSSTransitionGroup
                transitionName="zipup"
                transitionEnterTimeout={1200}
                transitionLeaveTimeout={500}
            >
                {
                    submitted ?
                    null :
                    <FormDetails
                        values={values}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        validate={this.validate}
                    />
                }
                {
                    submitted ?
                    <h2
                        key={1}
                        className="text-center pt-auto"
                    >Thank you for your interest!</h2>
                    : null
                }
                
            </ReactCSSTransitionGroup>
        )
    }
}

export default Form;