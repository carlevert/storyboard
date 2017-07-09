import * as React from "react";

import { StoryComponent } from "./StoryComponent";
import { Image, Release } from "../model";
import { ImagesComponent as Images } from "./ImageComponent"

interface EpicComponentProps {
   name: string;
   images: Image[];
   releases: Release[]
}
interface EpicComponentState {
   images: Image[];
   newStoryText: string;
   stories: string[];
}

const EpicSummaryImages = (props: { images: Image[] }) => <div className="images">
   {props.images.map(image => <div key={image.url} className="image">{image.url}</div>)}
</div>

const EpicSummary = (props: { name: string, description: string, images: Image[] }) =>
   <div className="summary">
      <div className="name">{props.name}</div>
      <EpicSummaryImages images={props.images} />
      <div className="description">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
      </div>
   </div>

const Stories = (props: { stories: string[], removeStory: any; addStory: any }) => {
   let counter = 0;

   return <div className="stories">
      {props.stories.map(story => <StoryComponent key={counter++} name={story} remove={props.removeStory} saved />)}
      <StoryComponent key={counter++} name="" remove={props.removeStory} saved={false} />
   </div>

}
export class EpicComponent extends React.Component<EpicComponentProps, EpicComponentState> {

   constructor(props: EpicComponentProps) {
      super(props)
      this.state = {
         images: this.props.images,
         // stories: [1, 2, 3, 4].map(item => `Story ${item.toString()}`),
         stories: [],
         newStoryText: ""
      };
      this.onChange = this.onChange.bind(this);
      this.addStory = this.addStory.bind(this);
      this.removeStory = this.removeStory.bind(this);
   }

   public onChange(e: React.SyntheticEvent<HTMLInputElement>) {
      this.setState({
         newStoryText: e.currentTarget.value
      })
   }

   public addStory() {
      if (this.state.newStoryText.length > 0)
         this.setState({
            stories: [...this.state.stories, this.state.newStoryText],
            newStoryText: ""
         })
   }

   public removeStory(name: string) {
      this.setState({
         stories: this.state.stories.filter(story => story != name)
      })
   }

   render() {
      return <div className="epic">
         <EpicSummary name={this.props.name} description="" images={this.state.images} />
         <div>
            <input type="text" onChange={this.onChange} value={this.state.newStoryText} /><button onClick={this.addStory}>Add story</button>
         </div>
         <Stories stories={this.state.stories} removeStory={this.removeStory} addStory={this.addStory} />
         <div >
            {this.props.releases.map(release => <div key={release.name} className="release">{release.name}</div>)}
         </div>
      </div >
   }

}