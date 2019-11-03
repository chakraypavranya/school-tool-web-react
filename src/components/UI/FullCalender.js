import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const FullCalender = (props) => {
  const {calendarEvents, handleDateClick, buttonText , handleAddEventBtnClick, handleEventClick} = props;
  
  return (
    <FullCalendar

    defaultView="dayGridMonth"
    customButtons = {RenderCustomButton(buttonText,handleAddEventBtnClick)}
    header={{
      left: 'prev, next today addEventBtn',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    }}
    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
    events={ calendarEvents }
    eventClick = {handleEventClick}
    dateClick={ handleDateClick }
    weekends='true'
    handleWindowResize = 'true'

    />
  )
}

const RenderCustomButton = (buttonText,handleAddEventBtnClick) =>{

  const customButtons = {
      addEventBtn: {
          text: buttonText,
          click: handleAddEventBtnClick,
      },
    }
  return customButtons
}

export default FullCalender;
