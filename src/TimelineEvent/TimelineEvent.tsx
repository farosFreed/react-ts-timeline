import { ReactNode } from "react";
//types
import { TimelineEventType } from "../App";
import CSS from "csstype";
//styles
import Card from "@material-ui/core/Card";
import { WrapperListItem } from "./TimelineEvent.styles";

function TimelineEvent({
  item,
  style,
  config,
  id,
}: {
  item: TimelineEventType;
  style: CSS.Properties;
  config?: string;
  id: string;
  //prevItem: (clickedItemIm: TimelineEventType) => void;
  //nextItem: (clickedItem: TimelineEventType) => void;
}) {
  return (
    <WrapperListItem
      id={id}
      style={style}
      className={config + " " + (item.Era ? item.Era : "")}
    >
      <div className="wrapper">
        <Card>
          <h1>
            {item.Title} - {item.Year}
          </h1>
          <h3>{item.Display_Date}</h3>
          <p>{item.Description}</p>
        </Card>
      </div>
    </WrapperListItem>
  );
}

export default TimelineEvent;
