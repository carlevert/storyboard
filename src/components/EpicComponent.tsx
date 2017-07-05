import * as React from "react";

import { StoryComponent } from "./StoryComponent";

export class EpicComponent extends React.Component<any, any> {


   private stories = [1, 2, 3, 4].map(item => <StoryComponent name={item.toString()} />)

   render() {
      return <div className="epic-container">
         <div className="epic-description"><div className="name">EpicComponent</div>
            <p style={({maxWidth: "500px"})}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
               laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            [img] [img]
         </div>
         <div className="epic-stories">{this.stories}</div>
      </div>
   }

}