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

const Header = styled.h2`
    ${tw`text-7xl text-center mb-2`}
`

const FormInput = styled.input`
    ${tw`border-2 border-black m-2 p-2 w-4/5 text-base`}
`

const UnitInput = styled(FormInput)`
    ${tw`w-8 text-base`}

    ${media.tablet(tw`w-16`)}
`

const UnitDesc = styled.small`
    ${tw`text-black font-medium font-semibold text-3xl`}
`

const SmallInfo = styled.small`
    ${tw`block mb-8 text-center text-black`}
`

const FormDetails = React.forwardRef((props, ref) => (
    <Container ref={ref} name="contact" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={props.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <Header>Want to get in touch?</Header>
        <FormGroup>
            <label htmlFor="worm-count" className="font-semibold">Worms</label>
            <UnitInput type="number" min="0" step="1" defaultValue={props.values.worms} onChange={props.handleChange} name="worms" className="num-input" id="worm-count" aria-describedby="worms-uom" required />
            <UnitDesc id="worms-uom">($10 per lb.)</UnitDesc>
        </FormGroup>
        <SmallInfo>Every pound contains: Adult Earthworms, Juvenile Earthworms, Egg Cases, and Compost!</SmallInfo>
        <FormGroup>
            <label htmlFor="compost-count" className="font-semibold">Vermicompost</label>
            <UnitInput type="number" min="0" step="10" defaultValue={props.values.compost} onChange={props.handleChange} name="compost" className="num-input" id="compost-count" aria-describedby="compost-uom" required />
            <UnitDesc id="compost-uom">($50 per 10 lb.)</UnitDesc>
        </FormGroup>
        <SmallInfo>Rich black compost castings. Some worms may be included!</SmallInfo>
        <FormGroup>
            <label htmlFor="compost-count" className="font-semibold">Compost Tea</label>
            <UnitInput type="number" min="0" step="5" defaultValue={props.values.tea} onChange={props.handleChange} name="tea" className="num-input" id="tea-count" aria-describedby="tea-uom" required />
            <UnitDesc id="tea-uom">($25 per 5 gal.)</UnitDesc>
        </FormGroup>
        <SmallInfo>FRESH compost tea. Feed your plants with naturally high nutrient liquid fertilizer.</SmallInfo>
        <FormGroup>
            <div className="mb-4">
                <input type="radio" className="" id="delivery" name="shipment" defaultValue={props.values.delivery} onChange={props.handleChange} required />
                <label htmlFor="delivery" className="font-semibold ml-1 mr-3">Delivery</label>
            </div>
            <div className="mb-4">
                <input type="radio" className="" id="pickup" name="shipment" defaultValue={props.values.pickup} onChange={props.handleChange} defaultChecked required />
                <label htmlFor="pickup" className="font-semibold ml-1">Pickup</label>
            </div>
        </FormGroup>
        <FormGroup>
            <textarea className="p-2 mb-4 w-full block border-2 border-black leading-none" name="comment" rows="4" onChange={props.handleChange} placeholder="If you have any questions, concerns, or special instructions, let me know here."></textarea>
        </FormGroup>
        <FormGroup>
            <label htmlFor="email" className="font-semibold">Email</label>
            <FormInput type="email" name="email" id="form-email" className="py-px text-5xl" onChange={props.handleChange} aria-describedby="disclaimer" placeholder="Enter email" required />
        </FormGroup>
        <SmallInfo id="disclaimer">We'll never share your email with anyone else.</SmallInfo>
        <button type="submit" className="block mx-auto bg-buy text-white p-2 rounded" onClick={props.validate}>Contact</button>
    </Container>
))

export default FormDetails