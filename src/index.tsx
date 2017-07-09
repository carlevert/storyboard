import * as React from "react";
import * as ReactDOM from "react-dom";

import { product, Epic, Release } from "./model";

import Product from "./components/ProductComponent";
import Epics from "./components/EpicsComponent";

interface AppState {
   epics: Epic[];
   epicsImageRow: boolean;
   releases: Release[];
}

class App extends React.Component<any, AppState> {
   
   private nextEpicNumber: number = 0;
   private releases: number;

   constructor(props: any) {
      super(props); 

      const e1 = new Epic();
      e1.name = `Epic ${++this.nextEpicNumber}`;
      e1.addImage("Image1");
      e1.addImage("Image2");
            
      this.state = {
         epicsImageRow: false,
         epics: [ e1 ],
         releases: [
            {
               id: 0,
               name: "First release",
               tasks: []
            },
            {
               id: 1,
               name: "Second release",
               tasks: []               
            }
         ]
      };
      this.addEpic = this.addEpic.bind(this);
   }

   public addEpic() {
      const e = new Epic();
      e.name = `Epic ${++this.nextEpicNumber}`;
      this.setState({
         epics: [
            ...this.state.epics, e
         ]
      });
   }

   render() {
      return <div>
         <Product name={product.name} />
         <button onClick={this.addEpic}>Add new epic</button>
         <Epics epics={this.state.epics} releases={this.state.releases} />
      </div>
   }

}

document.addEventListener("DOMContentLoaded", function (event) {
   const root = document.createElement("div");
   root.setAttribute("id", "root");
   root.style.font = "menu";
   const body = document.querySelectorAll("body")[0];
   body.appendChild(root);
   ReactDOM.render(<App />, root);
});
