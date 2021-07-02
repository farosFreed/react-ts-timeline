//import Milestone

/*
Properties
- timeline title
- timeline introduction
- timeline conclusion
- has an array of Milestones
*/

function Timeline({ children }: {children?: ReactNode}){
    return (
      <h1>{children}</h1>
    )
  }

  export default Timeline