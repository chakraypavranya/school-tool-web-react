import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

const FullCalender = (props) => {
  const {calendarEvents, handleDateClick, buttonText , handleAddEventBtnClick, handleEventClick} = props;
  
  return (
    <FullCalendar
      themeSystem= "standard"
      defaultView="dayGridMonth"
      customButtons = {RenderCustomButton(buttonText,handleAddEventBtnClick)}
      header={{
        left: 'prev, next today addEventBtn',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }}
      plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ,bootstrapPlugin ]}
      events={ calendarEvents }
      eventClick = {handleEventClick}
      dateClick={ handleDateClick }
      weekends='true'
      handleWindowResize = 'true'
      height="parent"
      aspectRatio="1.5"
      businessHours={{
        // days of week. an array of zero-based day of week integers (0=Sunday)
          daysOfWeek: [ 1, 2, 3, 4, 5 ],
          startTime: '10:00', // 10am
          endTime: '16:00' // 4pm
        }}
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
