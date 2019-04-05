import React from "react"
import styled, { css, keyframes } from "styled-components"
import tw from "tailwind.macro"
import { media } from "./layout"

const Container = styled.form`
    ${tw`bg-light-brown text-black p-6 rounded`};
`

const FormGroup = styled.div`
    ${tw`mb-2 flex flex-col justify-center items-center`};

    ${media.tablet(tw`flex-row`)}
`

const Header = styled.h2`
    ${tw`text-3xl text-center mb-2`}
`

const FormInput = styled.input`
    ${tw`border-2 border-black m-2 p-2 w-4/5`}
`

const UnitInput = styled(FormInput)`
    ${tw`w-12`}

    ${media.tablet(tw`w-16`)}
`

const UnitDesc = styled.small`
    ${tw`text-black font-medium font-semibold`}
`

const SmallInfo = styled.small`
    ${tw`block mb-8 text-center text-black`}
`

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
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
}

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            worms: 0,
            compost: 0,
            tea: 0,
            delivery: false,
            pickup: true,
            comment: '',
            email: ''
        }
    }

    validate(e) {
        const form = e.target.parentElement;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
    }

    handleSubmit(e) {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state })
        })
            .then(() => alert('success'))
            .catch(error => alert(error));

        e.preventDefault();
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { worms, compost, tea, delivery, pickup } = this.state;
        return (
            <Container id="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <Header>Want to get in touch?</Header>
                <FormGroup>
                    <label htmlFor="worm-count" className="font-semibold">Worms</label>
                    <UnitInput type="number" min="0" step="1" defaultValue={worms} onChange={this.handleChange} name="worms" className="num-input" id="worm-count" aria-describedby="worms-uom" required />
                    <UnitDesc id="worms-uom">($10 per lb.)</UnitDesc>
                </FormGroup>
                <SmallInfo>Every pound contains: Adult Earthworms, Juvenile Earthworms, Egg Cases, and Compost!</SmallInfo>
                <FormGroup>
                    <label htmlFor="compost-count" className="font-semibold">Vermicompost</label>
                    <UnitInput type="number" min="0" step="10" defaultValue={compost} onChange={this.handleChange} name="compost" className="num-input" id="compost-count" aria-describedby="compost-uom" required />
                    <UnitDesc id="compost-uom">($50 per 10 lb.)</UnitDesc>
                </FormGroup>
                <SmallInfo>Rich black compost castings. Some worms may be included!</SmallInfo>
                <FormGroup>
                    <label htmlFor="compost-count" className="font-semibold">Compost Tea</label>
                    <UnitInput type="number" min="0" step="5" defaultValue={tea} onChange={this.handleChange} name="tea" className="num-input" id="tea-count" aria-describedby="tea-uom" required />
                    <UnitDesc id="tea-uom">($25 per 5 gal.)</UnitDesc>
                </FormGroup>
                <SmallInfo>FRESH compost tea. Feed your plants with naturally high nutrient liquid fertilizer.</SmallInfo>
                <FormGroup>
                    <div className="mb-4">
                        <input type="radio" className="" id="delivery" name="shipment" defaultValue={delivery} required />
                        <label htmlFor="delivery" className="font-semibold ml-1 mr-3">Delivery</label>
                    </div>
                    <div className="mb-4">
                        <input type="radio" className="" id="pickup" name="shipment" defaultValue={pickup} defaultChecked required />-
                        <label htmlFor="pickup" className="font-semibold ml-1">Pickup</label>
                    </div>
                </FormGroup>
                <FormGroup>
                    <textarea className="p-2 mb-4 w-full block border-2 border-black" name="comment" rows="4" onChange={this.handleChange} placeholder="If you have any questions, concerns, or special instructions, let me know here."></textarea>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <FormInput type="email" name="email" id="form-email" onChange={this.handleChange} aria-describedby="disclaimer" placeholder="Enter email" required />
                </FormGroup>
                <SmallInfo id="disclaimer">We'll never share your email with anyone else.</SmallInfo>
                <button type="submit" className="block mx-auto bg-buy text-white p-2 rounded" onClick={this.validate}>Contact</button>
            </Container>
        )
    }
}

export default Form;