import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
//Timeline Component
import Timeline from "./Timeline/Timeline";
//Data
import { default as dataJSON } from "./data/data.json";

function App() {
  //deconstruct json data into timeline props
  //use state to track which event we are focused on?
  //const data = dataJSON;
  const [timelineData, setTimelineData] = useState(dataJSON);

  const timelineTitle = timelineData.title;
  const timelineEventData = timelineData.timelineEvents;
  const timelineIntro = timelineData.introduction;

  console.log(timelineData);
  console.log(timelineEventData);
  //console.log(timelineEventData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Timeline
        title={timelineTitle}
        timelineEvents={timelineEventData}
      ></Timeline>
    </div>
  );
}

export default App;
