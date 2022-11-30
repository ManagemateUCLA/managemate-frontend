import React, {useState, useEffect} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import { Scheduler, DayView, WeekView } from '@progress/kendo-react-scheduler';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

function Schedule() {
    const navigate = useNavigate();
    const [view, setView] = useState('day');
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState(null);

    const customModelFields = {
      id: 'gcal_event_id',
      title: 'name',
      description: 'associated_with_name',
      start: 'start',
      end: 'end',
    };
    
    useEffect(() => {
      async function setUpCalendarData() {
        let local_gid = null;
        const token = window.localStorage.getItem("userkey");
        console.log("token: ", token);
        try {
          const res = await axios.get("/user/checkUserInGroup/", {headers: {'auth-token': token}});
          console.log("groupId: ", res.data.gid);
          local_gid = res.data.gid;
        } catch (err) {
            console.error(err.response.data);
            console.log("Not in a group.");
        }
        try {
          const res = await axios.get("/calendar/" + local_gid + "/getCalendar/");
          console.log("calendar data: ", res.data);
          let calendar_data = res.data;
          calendar_data.forEach((ele, index) => {
            calendar_data[index].start = new Date(ele.start);
            calendar_data[index].end = new Date(ele.end);
          })
          setData(calendar_data);
        } catch (err) {
            console.error(err.response.data);
            console.log("Not in a group.");
        }
      }
      setUpCalendarData();
    }, []);

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
        {data && 
          <Scheduler data={data} 
          view={view} 
          onViewChange={handleViewChange} 
          date={date} onDateChange={handleDateChange} modelFields={customModelFields} 
          >
              <DayView />
              <WeekView />
          </Scheduler>
        }
        {!data && <DotLoader
        color={"#ffffff"}
        loading={true}
        
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      

     
    </div>
    )
}

export default Schedule;