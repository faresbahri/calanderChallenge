import * as React from 'react';
import {
  ScheduleComponent, Day,
  Inject,
  HeaderRowsDirective, HeaderRowDirective
} from '@syncfusion/ej2-react-schedule';

export class Schedule extends React.Component {


  //   //selectedDate is a proporty that save the date clicked
  render() {
    return <ScheduleComponent width='100%' height='550px' showHeaderBar={false} showTimeIndicator={false}>
      <HeaderRowsDirective>
        <HeaderRowDirective option='Year' />
        <HeaderRowDirective option='Month' />
        <HeaderRowDirective option='Week' />
        <HeaderRowDirective option='Date' />
        <HeaderRowDirective option='Hour' />
      </HeaderRowsDirective>

      <Inject services={[Day]} />
    </ScheduleComponent>;
  }
};
// import { title } from 'process';
// import React, { Component } from 'react'

// import Timetable from 'react-scheduler-table'

// const settings = {
//     startDay: "09:00",
//     endDay: "16:00",
//     is12hours: true,
//     hourSplit: 1, // 1 hour / 0.25 = 15 min - each row

// };

// export class Schedule extends Component {
//   render () {
//     return (

//       <div>
//       <Timetable classNameSavedTime='Bonjours' settings={settings} />
//       </div>
//     )
//   }
// }