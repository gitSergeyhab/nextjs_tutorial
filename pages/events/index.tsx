import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { EventType } from "../../types/types"

const Category = {
    Economy: 'economy',
    Music: 'music',
    Politic: 'politic',
    Sport: 'sport'
}



const Events = ({ events } : { events: EventType[] }) => {

    const [selectedEvents, setEvents] = useState(events);
    const router = useRouter();

    const handleBtnCategoryClick = async (category: string) => {
        try {
            const res = await fetch(`http://localhost:4000/events?category=${category}`);
            const eventsByBtn = await res.json();
            if (eventsByBtn) {
                setEvents(eventsByBtn);
                router.push(`/events?category=${category}`, undefined, { shallow: true })
            }
        } catch {}
    }



    const eventList  = selectedEvents.map((item) => <li key={item.id}> <h2> {item.title} {item.date}</h2></li>);
    const btnList = Object.values(Category).map((item) => {

        const handleBtnClick = () => handleBtnCategoryClick(item);
        return (
            <button
             type="button" 
             key={item}
             onClick={handleBtnClick}
             >
                {item}
            </button>
        )
    })

    return (
        <>
            <h1>Events</h1>
            {btnList}
            <ul> {eventList} </ul>
        </>
    )
}

export default Events;

export const getServerSideProps: GetServerSideProps = async(context) => {

    const { query } = context;
    const { category } = query;

    const param = category ? category : '';
    console.log('param', param)

    const res = await fetch(`http://localhost:4000/events/${param}`);
    const events = await res.json();

    return {
        props: { events }
    }
}