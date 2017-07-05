import * as React from "react";
import * as ReactDOM from "react-dom";

import { product, Epic } from "./model";

import Product from "./components/ProductComponent";
import Epics from "./components/EpicsComponent";

class App extends React.Component<any, any> {

   private epics: Epic[] = [];
   
   constructor(props: any) {
      super(props);
      const e1 = new Epic();
      e1.name = "Epic 1";
      const e2 = new Epic();
      e2.name = "Epic 2";
      this.epics.push(e1);
      this.epics.push(e2);
   }


   render() {
      return <div>
         <Product name={product.name} />
         <Epics epics={this.epics} />
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
