import { ReactNode } from "react";
//types
import { TimelineEventType } from "../App";

function TimelineEvent({
  item,
}: //prevItem,
//nextItem,
{
  item: TimelineEventType;
  //prevItem: (clickedItemIm: TimelineEventType) => void;
  //nextItem: (clickedItem: TimelineEventType) => void;
}) {
  return (
    <>
      <h1>{item.Title}</h1>
      <h3>{item.Display_Date}</h3>
      <p>{item.Year.toString()}</p>
    </>
  );
}

export default TimelineEvent;
