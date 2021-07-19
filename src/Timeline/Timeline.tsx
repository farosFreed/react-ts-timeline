import React, { ReactNode, useState, useEffect } from "react";
//styles element
import { Wrapper } from "./Timeline.styles";
//components
import TimelineEvent from "../TimelineEvent/TimelineEvent";
import Button from "@material-ui/core/Button";
//types
import { TimelineEventType } from "../App";

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
  timelineEvents: TimelineEventType[];
}) {
  //vars
  const [currentScene, setCurrentScene] = useState(0); //track focused event
  let prevEventYear = 0; //tracks space between timelineEvents

  //const [totalSpacebetween, setTotalSpacebetween] = useState(0); //totals up space between events to inform timeline how long to grow in slider mode

  //scrollTo currentScene IF slider config
  useEffect(() => {
    if (config === "slider") {
      let elem = document.getElementById(currentScene.toString());
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "end",
        });
      }
    }
  }, [currentScene]);

  //calc dynamic styles based on config
  let timelineStyles = {};
  if (config === "slider") {
    timelineStyles = {
      width: (timelineEvents.length * 60).toString() + "vw",
    };
  }

  //SLIDER
  //prev/next functions for slider style timeline
  const prevItem = (index: number) => {
    //minus 1, unless already 0
    setCurrentScene((prev) =>
      prev > 0 ? prev - 1 : timelineEvents.length - 1
    );
  };
  const nextItem = (index: number) => {
    //plus 1, unless exceeding # of events
    setCurrentScene((prev) =>
      prev < timelineEvents.length - 1 ? prev + 1 : 0
    );
  };
  //calculate the width of the <ul> element
  //based on number of events and space between each event
  /*const calcTimelineWidth = () => {
    let vw = (timelineEvents?.length + 1) * 50;
    console.log(vw);
    console.log("ran");
    sliderWidth = {
      width: "30vw",
    };
  };*/

  //DERIVED VALUES
  function calcSpaceBetweenPrev(itemYear: number, prevItemYear: number) {
    //const xSquaresCount = squares.filter(r => r === 'X').length
    //const oSquaresCount = squares.filter(r => r === 'O').length
    //return oSquaresCount === xSquaresCount ? 'X' : 'O'
  }

  //RENDER
  //return a list of timeLineEvents
  return (
    <Wrapper className={config}>
      <div className="timeline-header">
        <h1>{title}</h1>
        {config === "slider" ? (
          <div className="nav-buttons" role="navigation">
            <Button variant="outlined" onClick={() => prevItem(currentScene)}>
              Prev
            </Button>
            <Button variant="outlined" onClick={() => nextItem(currentScene)}>
              Next
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>

      <ul style={timelineStyles}>
        {timelineEvents?.map((item: TimelineEventType, index) => {
          //START timeline event render

          //calcSpaceBetweenPrev(item.Year, prevItemYear)
          //calc space between this item and previous
          //based on Year
          let spaceBetween = 0;
          if (prevEventYear !== 0) {
            spaceBetween = Math.abs(item.Year - prevEventYear);
          }
          //create styles
          let spacerStyles = null;
          //for 'slider' config
          if (config === "slider") {
            spacerStyles = {
              paddingLeft: spaceBetween + "px",
            };
          } else {
            //use default
            spacerStyles = {
              paddingTop: spaceBetween + "px",
            };
          }

          //set for next
          prevEventYear = item.Year;
          //setTotalSpacebetween((prev) => (prev += spaceBetween));

          //render
          return (
            <TimelineEvent
              key={index}
              id={index.toString()}
              item={item}
              config={config}
              style={spacerStyles}
            />
          );
          //END
        })}
      </ul>
    </Wrapper>
  );
}

export default Timeline;
