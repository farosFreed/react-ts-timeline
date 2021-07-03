import React, { ReactNode, useState } from "react";
//styles element
import { Wrapper } from "./Timeline.styles";

//import Timeline Event
import TimelineEvent from "../TimelineEvent/TimelineEvent";

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
interface TimelineEventProvider {
  Title: string;
  Year: number;
  Display_Date: string;
}

function Timeline({
  title,
  introduction,
  conclusion,
  timelineEvents,
}: {
  title: string;
  introduction?: string;
  conclusion?: string;
  timelineEvents?: Array<TimelineEventProvider>;
}) {
  //use state to track which event we are focused on?
  const [currentScene, setCurrentScene] = useState();

  //return a list of timeLineEvents
  return (
    <Wrapper>
      <h1>{title}</h1>
      <ul>
        {timelineEvents?.map((item, index) => {
          console.log(item);
          return <li key={index}>{item.Title}</li>;
        })}
      </ul>
    </Wrapper>
  );
}

export default Timeline;
