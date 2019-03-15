import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

const Container = styled.section`
    ${tw`mt-4 border border-grey-dark rounded text-center`};
    background-color: rgba(255, 255, 255, 0.3);
`

class Hours extends React.Component {
    componentDidMount() {
        let weekday = new Date().getDay();
        const weekdays = document.getElementById('weekdays').children;
        weekdays.item(weekday).classList.add('bg-buy', 'text-white');
    }

    render() {
        return (
            <Container id="hours">
                <h2 className="border-b border-grey-dark py-2">Hours for Delivery</h2>
                <ul className="list-reset" id="weekdays">
                    <li className="border-b border-grey-dark py-2" id="sunday">Sunday: <span className="hours">Closed</span></li>
                    <li className="border-b border-grey-dark py-2" id="monday">Monday: <span className="hours">9:00am-12:00pm</span></li>
                    <li className="border-b border-grey-dark py-2" id="tuesday">Tuesday: <span className="hours">9:00am-12:00pm</span></li>
                    <li className="border-b border-grey-dark py-2" id="wednesday">Wednesday: <span className="hours">9:00am-12:00pm</span></li>
                    <li className="border-b border-grey-dark py-2" id="thursday">Thursday: <span className="hours">9:00am-12:00pm</span></li>
                    <li className="border-b border-grey-dark py-2" id="friday">Friday: <span className="hours">9:00am-12:00pm</span></li>
                    <li className="py-2" id="saturday">Saturday: <span className="hours">Closed</span></li>
                </ul>
            </Container>
        )
    }
}

export default Hours