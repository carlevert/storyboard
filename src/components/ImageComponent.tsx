import * as React from 'react';
import { Image } from "../model"

interface ImageComponentProps {
   url: string;
}

interface ImagesComponentProps {
   images: Image[];
}

export class ImageComponent extends React.Component<ImageComponentProps, any> {
   render() {
      return <div className="image card">{this.props.url}</div>
   }
}

export class ImagesComponent extends React.Component<ImagesComponentProps, any> {
   render() {
      return <div className="epic-images">
         {this.props.images.map(image => <ImageComponent url={image.url} />)}
      </div>
   }
}