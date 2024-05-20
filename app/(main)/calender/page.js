"use client";

import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const locales = {
    'en-US': enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventText, setEventText] = useState('');

    const handleSelectSlot = (slotInfo) => {
        setSelectedDate(slotInfo.start);
        setShowModal(true);
    };

    const handleAddEvent = () => {
        setEvents([
            ...events,
            {
                title: eventText,
                start: selectedDate,
                end: selectedDate,
            },
        ]);
        setShowModal(false);
        setEventText('');
    };

    return (
        <>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                selectable
                onSelectSlot={handleSelectSlot}
            />

            <Dialog visible={showModal} onHide={() => setShowModal(false)} header="Add Event" style={{ width: '50vw' }}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="eventText">Event Text</label>
                        <InputText
                            id="eventText"
                            value={eventText}
                            onChange={(e) => setEventText(e.target.value)}
                        />
                    </div>
                    <div className="p-field">
                        <Button label="Save Changes" className={"my-2 "} onClick={handleAddEvent} />
                        <Button label="Close" onClick={() => setShowModal(false)} className="p-button-secondary font-semibold my-2" />
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default CalendarComponent;
