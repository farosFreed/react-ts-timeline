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

/*

//List component
// w/ generics
function MyList<ListItem>({
  items,
  render
}: {
  items: ListItem[], //my generic that can eventually hold data, like an empty array
  render: (item: ListItem) => ReactNode //pass a listItem and render a ReactNode
}){
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item) //call the render functions to render the item
          }
        </li>
      ))}
    </ul>
  )
}
*/

//type of timelineEvents
/*interface TimelineEvent {
  Title: string;
  Year: number;
  Display_Date: string;
  onClick: (item: TimelineEvent) => void;
}*/

function Timeline({
  title,
  introduction,
  conclusion,
  timelineEvents,
}: {
  title: string;
  introduction?: string;
  conclusion?: string;
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
    <Wrapper>
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
            marginTop: spaceBetween + "px",
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
