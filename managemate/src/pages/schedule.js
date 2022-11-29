import React, {useState, useEffect} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import { Scheduler, DayView, WeekView } from '@progress/kendo-react-scheduler';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Schedule() {
    const navigate = useNavigate();
    const [view, setView] = useState('day');
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [groupId, setGroupId] = useState(null);

    const baseData = [
      {
          "name": "flying",
          "start": "2022-11-29T19:00:17.000Z",
          "end": "2022-11-29T20:00:17.000Z",
          "associated_with": "638522c82ebe4ba37ae88afb",
          "associated_with_name": "Abhishek Marda",
          "gcal_event_id": "afisflh58pfi3i7ennke8a28ek"
      }
  ];

    const customModelFields = {
      id: 'gcal_event_id',
      title: 'name',
      description: 'associated_with_name',
      start: 'start',
      end: 'end',
      // recurrenceRule: 'RecurrenceRule',
      // recurrenceId: 'RecurrenceID',
      // recurrenceExceptions: 'RecurrenceException'
    };
    useEffect(() => {
      const token = window.localStorage.getItem("userkey");
      console.log("token: ", token);
      async function getGroupId() {
          try {
              const res = await axios.get("/user/checkUserInGroup/", {headers: {'auth-token': token}});
              console.log("groupId: ", res.data.gid);
              setGroupId(res.data.gid);
          } catch (err) {
              console.error(err.response.data);
              console.log("Not in a group.");
          }
      }
      getGroupId();
    }, []);

    useEffect(() => {
      async function getCalendar() {
          try {
              const res = await axios.get("/calendar/" + groupId + "/getCalendar/");
              console.log("calendar data: ", res.data);

              //res.data.forEach()
              //setData(baseData);
              setData(res.data);
          } catch (err) {
              console.error(err.response.data);
              console.log("Not in a group.");
          }
      }
      getCalendar();
  }, [groupId]);


    const handleViewChange = React.useCallback(event => {
      setView(event.value);
    }, [setView]);
    const handleDateChange = React.useCallback(event => {
      setDate(event.value);
    }, [setDate]);

  return (
    <div className='background'>
        <div style={{width: '90%', marginBottom: '20px'}}>
            <Button className='button' onClick={()=>navigate('/home')}>Home</Button>
        </div>
        <Scheduler data={data} 
        view={view} 
        onViewChange={handleViewChange} 
        date={date} onDateChange={handleDateChange} modelFields={customModelFields} 
        >
            <DayView />
            <WeekView />
        </Scheduler>
    </div>
    )
}

export default Schedule;