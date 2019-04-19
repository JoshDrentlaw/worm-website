import React from "react"

import FormDetails from './form-details'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const formRef = React.createRef();

class Form extends React.Component {
    constructor(props) {
        super(props);

        const form = undefined;

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

    componentDidMount(form) {
        form = formRef.current;
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

    handleSubmit = (e, form) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                console.log(form);
            })
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
                        ref={formRef}
                        values={values}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        validate={this.validate}
                    />
                )
            case 2:
                return (<h2 className="text-center my-16">Thank you for your interest!</h2>)
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