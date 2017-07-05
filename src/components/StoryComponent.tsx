import * as React from "react";

export class StoryComponent extends React.Component<{name: string}, any> {



   render() {
      return <div className="story">StoryComponent {this.props.name}</div>
   }

}