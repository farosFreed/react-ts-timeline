import { ReactNode } from 'react';

/*
Properties for TimelineEvent
- title
- description?
- image?
- backgroundImg?
- date

initializes 
- 
*/

function TimelineEvent({ children }: {children?: ReactNode}){

    //const [ currentScene, setCurrentScene ] = useState([])

    return (
      <h1>{children}</h1>
    )
  }

  export default TimelineEvent