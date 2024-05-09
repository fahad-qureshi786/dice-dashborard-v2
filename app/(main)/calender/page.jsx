import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);

    // Function to handle the addition of a new event
    const handleSelectSlot = (slotInfo) => {
        const title = prompt('Enter event title:');
        if (title) {
            const newEvent = {
                title,
                start: slotInfo.start,
                end: slotInfo.end,
            };
            setEvents([...events, newEvent]);
        }
    };

    return (
        <div style={{ height: '500px', padding: '20px' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectSlot}
                style={{ height: '100%' }}
            />
        </div>
    );
};

export default CalendarComponent;
