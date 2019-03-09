import React from "react"
import styled, { css } from "styled-components"
import tw from "tailwind.macro"

const sizes = {
    desktop: 992,
    tablet: 768,
    landscape: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})

const Container = styled.form`
    ${tw`bg-light-brown text-black p-6 rounded`};
`

const FormGroup = styled.div`
    ${tw`mb-2 flex flex-col justify-center items-center`};

    ${media.tablet(tw`flex-row`)}
`

const FormInput = styled.input`
    ${tw`border-2 border-black m-2 p-2 w-4/5`}
`

const UnitInput = styled(FormInput)`
    ${tw`w-12`}
`

const UnitDesc = styled.small`
    ${tw`text-black font-medium font-semibold`}
`

const SmallInfo = styled.small`
    ${tw`block mb-8 text-center text-black`}
`

class Form extends React.Component {
    

    validate = (e) => {
        const form = document.getElementById('contact-form');
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add("bg-color-green");
    }

    render() {
        return (

            <Container id="contact-form" name="contact" method="POST" data-netlify="true">
                <FormGroup>
                    <label htmlFor="worm-count" className="font-semibold">Worms</label>
                    <UnitInput type="number" min="0" step="1" defaultValue="0" name="worms" className="num-input" id="worm-count" aria-describedby="worms-uom" required />
                    <UnitDesc id="worms-uom">($10 per lb.)</UnitDesc>
                </FormGroup>
                <SmallInfo>Every pound contains: Adult Earthworms, Juvenile Earthworms, Egg Cases, and Compost!</SmallInfo>
                <FormGroup>
                    <label htmlFor="compost-count" className="font-semibold">Vermicompost</label>
                    <UnitInput type="number" min="0" step="10" defaultValue="0" name="compost" className="num-input" id="compost-count" aria-describedby="compost-uom" required />
                    <UnitDesc id="compost-uom">($50 per 10 lb.)</UnitDesc>
                </FormGroup>
                <SmallInfo>Rich black compost castings. Some worms may be included!</SmallInfo>
                <FormGroup>
                    <label htmlFor="compost-count" className="font-semibold">Compost Tea</label>
                    <UnitInput type="number" min="0" step="5" defaultValue="0" name="tea" className="num-input" id="tea-count" aria-describedby="tea-uom" required />
                    <UnitDesc id="tea-uom">($25 per 5 gal.)</UnitDesc>
                </FormGroup>
                <SmallInfo>FRESH compost tea. Feed your plants with naturally high nutrient liquid fertilizer.</SmallInfo>
                <FormGroup>
                    <div className="mb-4">
                        <input type="radio" className="" id="delivery" name="deliveryOption" defaultValue="delivery" required />
                        <label htmlFor="delivery" className="font-semibold ml-1 mr-3">Delivery</label>
                    </div>
                    <div className="mb-4">
                        <input type="radio" className="" id="pickup" name="deliveryOption" defaultValue="pickup" defaultChecked required />
                        <label htmlFor="pickup" className="font-semibold ml-1">Pickup</label>
                    </div>
                </FormGroup>
                <FormGroup>
                    <textarea className="p-2 mb-4 w-full block border-2 border-black" name="comment" rows="4" placeholder="If you have any questions, concerns, or special instructions, let me know here."></textarea>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <FormInput type="email" name="email" id="form-email" aria-describedby="disclaimer" placeholder="Enter email" required />
                </FormGroup>
                <SmallInfo id="disclaimer">We'll never share your email with anyone else.</SmallInfo>
                <button type="submit" className="block mx-auto bg-buy text-white p-2 rounded" onClick={this.validate}>Contact</button>
            </Container>
        )
    }
}

export default Form;