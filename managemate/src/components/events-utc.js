const baseData = [{
    "TaskID": 4,
    "OwnerID": 2,
    "Title": "Sweeping",
    "Description": "Sanchit Aggarwal",
    "Start": "2022-11-28T21:00:00.000Z",
    "End": "2022-11-28T22:00:00.000Z",
    // "RecurrenceRule": null,
    // "RecurrenceID": null,
    // "RecurrenceException": null,
    // "isAllDay": false
  }, 
  // {
  //   "TaskID": 5,
  //   "OwnerID": 1,
  //   "Title": "Take out the trash",
  //   "Description": "Aritra Mullick",
  //   "Start": "2022-11-29T23:00:00.000Z",
  //   "End": "2022-11-29T23:10:00.000Z",
  //   "RecurrenceRule": null,
  //   "RecurrenceID": null,
  //   "RecurrenceException": null,
  //   "isAllDay": false
  // }, {
  //   "TaskID": 6,
  //   "OwnerID": 4,
  //   "Title": "Create demo video",
  //   "Description": "Kate Land",
  //   "Start": "2022-11-28T18:00:00.000Z",
  //   "End": "2022-11-28T20:00:00.000Z",
  //   "RecurrenceRule": null,
  //   "RecurrenceID": null,
  //   "RecurrenceException": null,
  //   "isAllDay": true
  // }];
];
  export const customModelFields = {
    id: 'TaskID',
    title: 'Title',
    description: 'Description',
    start: 'Start',
    end: 'End',
    recurrenceRule: 'RecurrenceRule',
    recurrenceId: 'RecurrenceID',
    recurrenceExceptions: 'RecurrenceException'
  };
  const currentYear = new Date().getFullYear();
  
  const parseAdjust = eventDate => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
  };
  
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  
              /*"name": "flying",
              "start": "2022-11-29T19:00:17.000Z",
              "end": "2022-11-29T20:00:17.000Z",
              "associated_with": "638522c82ebe4ba37ae88afb",
              "associated_with_name": "Abhishek Marda",
              "gcal_event_id": "dk4r0t229aa624m38ftlj45hn4"*/
  
  export const displayDate = new Date();
  export const sampleData = baseData.map(dataItem => ({
    id: dataItem.TaskID,
    start: parseAdjust(dataItem.Start),
    end: parseAdjust(dataItem.End),
    //isAllDay: dataItem.isAllDay,
    title: dataItem.Title,
    description: dataItem.Description,
    // recurrenceRule: dataItem.RecurrenceRule,
    // recurrenceId: dataItem.RecurrenceID,
    // recurrenceExceptions: dataItem.RecurrenceException,
    ownerID: dataItem.OwnerID,
    personId: dataItem.OwnerID
  }));
  export const sampleDataWithCustomSchema = baseData.map(dataItem => ({ ...dataItem,
    Start: parseAdjust(dataItem.Start),
    End: parseAdjust(dataItem.End),
    PersonIDs: randomInt(1, 4),
  }));