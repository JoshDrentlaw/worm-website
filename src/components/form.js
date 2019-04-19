import React from "react"
import styled, { css, keyframes } from "styled-components"

import FormDetails from './form-details'

// Form submission animations
const zipup = keyframes`
    from {
        overflow: hidden;
        height: 100%;
    }

    to {
        height: 0;
    }
`
const Zipup = css `
    animation: ${zipup} 1s cubic-bezier(0.075, 0.82, 0.165, 1) once;
`

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
            step: 1
        }
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

    nextStep = () => {
        this.setState({step: this.state.step + 1})
    }

    handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
        this.nextStep();
    };

    render() {
        const { worms, compost, tea, delivery, pickup } = this.state;
        const values = { worms, compost, tea, delivery, pickup };
        switch (this.state.step) {
            case 1:
                return (
                    <FormDetails 
                        values={values}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        validate={this.validate}
                    />
                )
            case 2:
                return (<h2>Submitted</h2>)
            default:
                return (
                    <FormDetails 
                        values={values}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        validate={this.validate}
                    />
                )
        }
    }
}

export default Form;