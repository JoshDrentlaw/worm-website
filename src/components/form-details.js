import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"
import { media } from "./layout"

const Container = styled.form`
    ${tw`bg-light-brown text-black p-6 rounded`};
`

const FormGroup = styled.div`
    ${tw`mb-2 flex flex-col justify-center items-center`};

    ${media.tablet(tw`flex-row`)}
`

const RadioGroup = styled(FormGroup)`
    ${tw`flex-row mb-4`}
`

const Header = styled.h2`
    ${tw`text-9xl text-center mb-2 font-hand leading-hand`}
`

const Label = styled.label`
    ${tw`font-semibold font-hand text-6xl leading-hand`}
`

const FormInput = styled.input`
    ${tw`border-2 border-black m-2 p-2 w-4/5 text-base`}
`

const EmailInput = styled(FormInput)`
    ${tw`text-xl`}
`

const UnitInput = styled(FormInput)`
    ${tw`w-8 text-base`}

    ${media.tablet(tw`w-16`)}
`

const UnitDesc = styled.small`
    ${tw`text-black font-medium font-semibold text-2xl`}
`

const SmallInfo = styled.small`
    ${tw`block mb-8 text-center text-black text-base`}
`

const FormDetails = (props) => (
    <Container key={0} name="contact" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={props.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <Header>Want to get started?</Header>
        <FormGroup>
            <Label htmlFor="worm-count">Worms</Label>
            <UnitInput type="number" min="0" step="1" defaultValue={props.values.worms} onChange={props.handleChange} name="worms" className="num-input" id="worm-count" aria-describedby="worms-uom" required />
            <UnitDesc id="worms-uom">($10 per lb.)</UnitDesc>
        </FormGroup>
        <SmallInfo>Every pound contains: Adult Earthworms, Juvenile Earthworms, Egg Cases, and Compost!</SmallInfo>
        <FormGroup>
            <Label htmlFor="compost-count">Vermicompost</Label>
            <UnitInput type="number" min="0" step="10" defaultValue={props.values.compost} onChange={props.handleChange} name="compost" className="num-input" id="compost-count" aria-describedby="compost-uom" required />
            <UnitDesc id="compost-uom">($50 per 10 lb.)</UnitDesc>
        </FormGroup>
        <SmallInfo>Rich black compost castings. Some worms may be included!</SmallInfo>
        <FormGroup>
            <Label htmlFor="compost-count">Compost Tea</Label>
            <UnitInput type="number" min="0" step="5" defaultValue={props.values.tea} onChange={props.handleChange} name="tea" className="num-input" id="tea-count" aria-describedby="tea-uom" required />
            <UnitDesc id="tea-uom">($25 per 5 gal.)</UnitDesc>
        </FormGroup>
        <SmallInfo>FRESH compost tea. Feed your plants with naturally high nutrient liquid fertilizer.</SmallInfo>
        <FormGroup>
            <RadioGroup>
                <input type="radio" id="delivery" name="shipment" defaultValue={props.values.delivery} onChange={props.handleChange} required />
                <Label htmlFor="delivery" className="ml-1 mr-3">Delivery</Label>
            </RadioGroup>
            <RadioGroup>
                <input type="radio" id="pickup" name="shipment" defaultValue={props.values.pickup} onChange={props.handleChange} defaultChecked required />
                <Label htmlFor="pickup" className="ml-1">Pickup</Label>
            </RadioGroup>
        </FormGroup>
        <FormGroup>
            <textarea className="p-2 mb-4 w-full block border-2 border-black leading-none text-xl" name="comment" rows="4" onChange={props.handleChange} placeholder="If you have any questions, concerns, or special instructions, let me know here."></textarea>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="email">Email</Label>
            <EmailInput type="email" name="email" id="form-email" onChange={props.handleChange} aria-describedby="disclaimer" placeholder="Enter email" required />
        </FormGroup>
        <SmallInfo id="disclaimer">We'll never share your email with anyone else.</SmallInfo>
        <button type="submit" className="block mx-auto bg-buy text-white p-2 rounded text-3xl" onClick={props.validate}>Contact</button>
    </Container>
)

export default FormDetails