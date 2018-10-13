import React, { Component } from 'react';

export default class LoadFoodItems extends React.Component{

    render(){
      return(
        <div>
            <button onClick={()=> this.props.load()}> Click To Load Food Items </button>
        </div>
      )
    }
}