import * as React from "react"

import { Epic, Release } from "../model";
import { EpicComponent } from "./EpicComponent";

interface EpicsProps {
   epics: Epic[];
   releases: Release[];
}

export default class Product extends React.Component<EpicsProps, any>  {

   private style: { [propertyName: string]: React.CSSProperties } = {
      epics: {
         display: 'flex',
         flexDirection: 'row',
      }
   }


   render() {
      return <div style={this.style.epics}>
         {this.props.epics.map(epic => <EpicComponent key={epic.name} {...epic  } releases={this.props.releases} />)}
      </div>
   }
}