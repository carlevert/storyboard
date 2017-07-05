import * as React from "react"

interface ProductProps {
   name: string;
}

export default class Product extends React.Component<ProductProps, any>  {

   private style: React.CSSProperties  = {
      fontSize: "30px",
      fontWeight: 500,
      margin: "20px 0"
   }

   render() {
      return <div style={this.style}>{this.props.name}</div>   
   } 
}