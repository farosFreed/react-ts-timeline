import React, { ReactNode, useState } from 'react';
//styles element
import { Wrapper } from './Timeline.styles'

//import Timeline Event
import TimelineEvent from '../TimelineEvent/TimelineEvent';

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


function Timeline<TimelineEvent>({ title, introduction, conclusion, timelineEvents }: {title: string, introduction?: string, conclusion?:string, timelineEvents:TimelineEvent[]}){

    const [ currentScene, setCurrentScene ] = useState([])

    return (
    <Wrapper>
        <h1>{title}</h1>
        <ul>
            {timelineEvents.map(event => {
                <li key={event.title}></li>
            })}
        </ul>
    </Wrapper>
    )
  }

  export default Timeline