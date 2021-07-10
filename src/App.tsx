import React, { useState } from "react";
import "./App.css";
//Timeline Component
import Timeline from "./Timeline/Timeline";
//Data
import { default as dataJSON } from "./data/data.json";
//import TimelineEvent from "./TimelineEvent/TimelineEvent";
//Types
//marked with export so that Timeline can get
export type TimelineEventType = {
  Title: string;
  Display_Date: string;
  Year: number;
  Description: string | null;
  Era?: string | null;
};

function App() {
  //deconstruct json data into timeline props
  //use state to track which event we are focused on?
  //const data = dataJSON;
  const [timelineData, setTimelineData] = useState(dataJSON);
  //const [currentScene, setCurrentScene] = useState(0);

  const timelineTitle = timelineData.title;
  const timelineEventData = timelineData.timelineEvents;
  const timelineIntro = timelineData.introduction;
  const timelineConfig = timelineData.config;

  //console.log(timelineData);
  //console.log(timelineEventData);
  //console.log(timelineEventData);

  return (
    <div className="App">
      <Timeline
        title={timelineTitle}
        config={timelineConfig}
        timelineEvents={timelineEventData}
      />
    </div>
  );
}

export default App;
