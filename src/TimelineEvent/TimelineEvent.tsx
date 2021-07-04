import { ReactNode } from "react";
import CSS from "csstype";
//types
import { TimelineEventType } from "../App";

function TimelineEvent({
  item,
  style,
}: {
  item: TimelineEventType;
  style: CSS.Properties;
  //prevItem: (clickedItemIm: TimelineEventType) => void;
  //nextItem: (clickedItem: TimelineEventType) => void;
}) {
  return (
    <li style={style}>
      <h1>
        {item.Title} - {item.Year}
      </h1>
      <h3>{item.Display_Date}</h3>
      <p>{item.Description}</p>
    </li>
  );
}

export default TimelineEvent;
