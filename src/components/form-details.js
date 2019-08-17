import React from "react"

import styled from "styled-components"

const Container = styled.form`
    border: 10px solid #d7d2c5;
    border-radius: 0.25rem;
    padding: 1.5rem;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`

const RadioGroup = styled(FormGroup)`
    flex-direction: row;
    margin-bottom: 1rem;
`

const Header = styled.h2`
    font-family: hand;
    line-height: 60px;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 0.5rem;
`

const Label = styled.label`
    font-family: hand;
    font-size: 4rem;
    font-weight: 600;
    line-height: 60px;
`

const FormInput = styled.input`
    border: 2px solid #403c32;
    font-size: 1rem;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 80%;
`

const EmailInput = styled(FormInput)`
    font-size: 1.25rem;
`

const UnitInput = styled(FormInput)`
    font-size: 1rem;
    width: 2rem;

    @media(min-width: 768px) {
        width: 4rem;
    }
`

const UnitDesc = styled.small`
    color: #403c32;
    font-size: 1.5rem;
    font-weight: 600;
`

const SmallInfo = styled.small`
    color: #403c32;
    display: block;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`

const Textarea = styled.textarea`
    display: block;
    border: 2px solid #403c32;
    font-size: 1.25rem;
    line-height: 1;
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 100%;
`

const Button = styled.button`
    background-color: #5f8b53;
    border-radius: 0.25rem;
    color: white;
    display: block;
    font-size: 1.875rem;
    margin: 0 auto;
    padding: 0.5rem;
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
                <Label htmlFor="delivery" style={{ margin: '0 0.75rem 0 0.25rem'}}>Delivery</Label>
            </RadioGroup>
            <RadioGroup>
                <input type="radio" id="pickup" name="shipment" defaultValue={props.values.pickup} onChange={props.handleChange} defaultChecked required />
                <Label htmlFor="pickup" style={{ marginLeft: '0.25rem'}}>Pickup</Label>
            </RadioGroup>
        </FormGroup>
        <FormGroup>
            <Textarea name="comment" rows="4" onChange={props.handleChange} placeholder="If you have any questions, concerns, or special instructions, let me know here."></Textarea>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="email">Email</Label>
            <EmailInput type="email" name="email" id="form-email" onChange={props.handleChange} aria-describedby="disclaimer" placeholder="Enter email" required />
        </FormGroup>
        <SmallInfo id="disclaimer">We'll never share your email with anyone else.</SmallInfo>
        <Button type="submit" onClick={props.validate}>Contact</Button>
    </Container>
)

export default FormDetails