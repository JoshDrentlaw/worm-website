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
    ${tw`bg-light-brown text-black p-4 rounded`};
`

const FormGroup = styled.div`
    ${tw`mb-2 flex flex-col justify-center items-center`};

    ${media.tablet(tw`flex-row`)}
`

/* const Label = styled.label`
    ${tw`font-medium`};
` */

const FormInput = styled.input`
    ${tw`border-2 border-black mx-2 p-2`}

    ${media.tablet`margin: `}
`

const UnitInput = styled(FormInput)`
    ${tw`w-1/6`}
`

const UnitDesc = styled.small`
    ${tw`text-black text-sm`}
`

const SmallInfo = styled.small`
    ${tw`block mb-8 text-center color-black`}
`

class Form extends React.Component {
    validate(e) {
        /* const form = this.parentElement;
        console.log(this);
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add('was-validated'); */
    }

    render() {
        return (

            <Container name="contact" method="POST" data-netlify="true">
                <FormGroup>
                    <label htmlFor="email" className="font-medium">Email</label>
                    <FormInput type="email" name="email" className="" id="form-email" aria-describedby="disclaimer" placeholder="Enter email" required />
                </FormGroup>
                <SmallInfo id="disclaimer">We'll never share your email with anyone else.</SmallInfo>
                <FormGroup>
                    <label htmlFor="worm-count" className="col-auto">Worms</label>
                    <UnitInput type="number" min="0" step="1" defaultValue="0" name="worms" className="num-input" id="worm-count" aria-describedby="worms-uom" required />
                    <UnitDesc id="worms-uom">($10 per lb.)</UnitDesc>
                </FormGroup>
                <SmallInfo>Every pound contains: Adult Earthworms, Juvenile Earthworms, Egg Cases, and Compost!</SmallInfo>
                <FormGroup>
                    <label htmlFor="compost-count" className="col-auto">Vermicompost</label>
                    <UnitInput type="number" min="0" step="10" defaultValue="0" name="compost" className="num-input" id="compost-count" aria-describedby="compost-uom" required />
                    <UnitDesc id="compost-uom">($50 per 10 lb.)</UnitDesc>
                </FormGroup>
                <SmallInfo>Rich black compost castings. Some worms may be included!</SmallInfo>
                <FormGroup>
                    <label htmlFor="compost-count" className="col-auto">Compost Tea</label>
                    <UnitInput type="number" min="0" step="5" defaultValue="0" name="tea" className="num-input" id="tea-count" aria-describedby="tea-uom" required />
                    <UnitDesc id="tea-uom">($25 per 5 gal.)</UnitDesc>
                </FormGroup>
                <SmallInfo>FRESH compost tea. Feed your plants with naturally high nutrient liquid fertilizer.</SmallInfo>
                <FormGroup>
                    <div>
                        <input type="radio" className="form-check-input" id="delivery" name="deliveryOption" defaultValue="delivery" required />
                        <label htmlFor="delivery" className="form-check-label">Delivery</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" id="pickup" name="deliveryOption" defaultValue="pickup" defaultChecked required />
                        <label htmlFor="pickup" className="form-check-label">Pickup</label>
                    </div>
                </FormGroup>
                <FormGroup>
                    <textarea className="p-2 w-full block border-2 border-black" name="comment" rows="4" placeholder="If you have any questions, concerns, or special instructions, let me know here."></textarea>
                </FormGroup>
                <button type="submit" className="block mx-auto" onClick={this.validate}>Contact</button>
            </Container>
        )
    }
}

export default Form;