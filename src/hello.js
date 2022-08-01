import React,{useState,useEffect} from "react";

class Hello extends from React.Component {
  constructor()
    {
      super();
      this.state={
        users:null
      }
    }
    componentDidMount(){
      fetch("https://reqres.in/api/users").then((resp)=>{
        resp.json.then((result)=>{
          console.log(result);
        })
      })
    }
      render() {
        return(
          <h1>Fetch Api</h1>
        )
      }
    }
    
  export default Hello;
