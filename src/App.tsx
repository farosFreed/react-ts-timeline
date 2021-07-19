import React, { useState } from "react";
import "./App.css";
//Timeline Component
import Timeline from "./Timeline/Timeline";
//Data
import { default as dataJSON } from "./data/data.json";
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
  const [timelineData, setTimelineData] = useState(dataJSON);

  const timelineTitle = timelineData.title;
  const timelineEventData = timelineData.timelineEvents;
  const timelineIntro = timelineData.introduction;
  const timelineConfig = timelineData.config;

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
