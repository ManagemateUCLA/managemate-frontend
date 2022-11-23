import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import { guid } from '@progress/kendo-react-common';
import { Scheduler, DayView, WeekView } from '@progress/kendo-react-scheduler';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import { sampleDataWithCustomSchema, displayDate, customModelFields } from '../components/events-utc';
import {useNavigate} from "react-router-dom";

function Schedule() {
    const navigate = useNavigate();
    const [view, setView] = React.useState('day');
    const [date, setDate] = React.useState(displayDate);
    const [data, setData] = React.useState(sampleDataWithCustomSchema);
    const handleViewChange = React.useCallback(event => {
      setView(event.value);
    }, [setView]);
    const handleDateChange = React.useCallback(event => {
      setDate(event.value);
    }, [setDate]);
    const handleDataChange = React.useCallback(({
      created,
      updated,
      deleted
    }) => {
      setData(old => old.filter(item => deleted.find(current => current.TaskID === item.TaskID) === undefined).map(item => updated.find(current => current.TaskID === item.TaskID) || item).concat(created.map(item => Object.assign({}, item, {
        TaskID: guid()
      }))));
    }, [setData]);

  return (
    <div className='background'>
        <div style={{width: '100%', paddingLeft: '10%', marginBottom: '20px'}}>
            <Button className='button' onClick={()=>navigate('/home')}>Home</Button>
        </div>
        <Scheduler data={data} onDataChange={handleDataChange} view={view} 
        onViewChange={handleViewChange} 
        date={date} onDateChange={handleDateChange} modelFields={customModelFields} 
        group={{
          resources: [ 'Persons']
        }} 
        // resources={[{
        //   name: 'Persons',
        //   data: [{
        //     text: 'roommate1',
        //     value: 1,
        //     color: '#73c2fb'
        //   }, {
        //     text: 'roommate2',
        //     value: 2,
        //     color: '#1e90ff'
        //   }, {
        //     text: 'roommate3',
        //     value: 3,
        //     color: '#1560bd'
        //   }, {
        //     text: 'roommate4',
        //     value: 4,
        //     color: '#1034a6'
        //   }],
        //   field: 'PersonIDs',
        //   valueField: 'value',
        //   textField: 'text',
        //   colorField: 'color'
        // }]}
        >
            <DayView />
            <WeekView />
        </Scheduler>
    </div>
    )
}

export default Schedule;