import React, { ReactNode, useState } from "react";
//styles element
import { Wrapper } from "./Timeline.styles";
//components
import TimelineEvent from "../TimelineEvent/TimelineEvent";
import Button from "@material-ui/core/Button";
//types
import { TimelineEventType } from "../App";
/*
Properties for timeline
- timeline title
- timeline introduction?
- timeline conclusion?
- has an array of TimelineEvents

initializes ?
- currentScene : tracks current displayed milestone or introduction/conclusion
*/

function Timeline({
  title,
  introduction,
  conclusion,
  config,
  timelineEvents,
}: {
  title: string;
  introduction?: string;
  conclusion?: string;
  config?: string;
  timelineEvents?: TimelineEventType[];
}) {
  //vars
  const [currentScene, setCurrentScene] = useState(0); //track focused event
  let prevEventYear = 0; //tracks space between timelineEvents

  //functions
  const prevItem = (index: number) => {
    //minus 1, unless already 0
    setCurrentScene((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const nextItem = (index: number) => {
    //minus 1, unless already 0
    setCurrentScene((prev) => prev + 1);
  };

  //return a list of timeLineEvents
  return (
    <Wrapper className={config}>
      <h1>{title}</h1>
      <div className="navButtons" role="navigation">
        <Button onClick={() => prevItem(currentScene)}>Prev</Button>
        <Button onClick={() => nextItem(currentScene)}>Next</Button>
      </div>
      <ul>
        {timelineEvents?.map((item: TimelineEventType, index) => {
          //calc space between this item and previous
          //based on Year
          let spaceBetween = 0;
          if (prevEventYear !== 0) {
            spaceBetween = Math.abs(item.Year - prevEventYear);
          }
          //create style
          //default
          let spacerStyles = {
            paddingTop: spaceBetween + "px",
          };

          //set for next
          prevEventYear = item.Year;

          //render
          return <TimelineEvent key={index} item={item} style={spacerStyles} />;
        })}
      </ul>
    </Wrapper>
  );
}

export default Timeline;
