import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import LoadFoodItems from './food-items/load.food'
import FoodList from './food-items/food-items';

import axios from 'axios'

const Food_List = {
  marginRight: '50px'
};

class App extends Component {
  
    //Each Component Lifecycle
   //Initial Phase - 1
   /**
    * getDefaultProps()
    * getInitialState()
    * componentWillMount()
    * render()
    * componentDidMount()
    */
   //Update Phase - 2
   /**
    *  shouldComponentUpdate()
    *  componentWillUpdate()
    *  render()
    *  componentDidUpdate()
    */
   //Props Change Phase - 3
   /**
    *  componentsWillRecieveProps()
    *  shouldComponentUpdate()
    *  componentWillUpdate()
    *  render()
    *  componentDidUpdate()
    */
   //Unmouting Phase
   /**
    *  componentWillUnmount()
    */

  //Initial Set up
 /*  getDefaultProps(){
      console.log("Initial Default Props");
  }
 */
/*   getInitialState(){
     console.log('Initial state')         
  }
 */
  componentWillMount(){
    console.log('component will mount')
  }

  componentDidMount(){
    console.log('component did mount')
  }

  //props recieved from backend and now state change will update the props 
  componentsWillRecieveProps(newProps){
    console.log('component will recieve props')
  }

  shouldComponentUpdate(newProps, newState){
    console.log('should component update ')
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('component will update')    
  }

  componentWillUpdate(prevProps, prevState){
    console.log('component will update')    
  }

  //when closing browser or stopping app or clearing thd DOM
  componentWillUnmount(){
    console.log('component will unmount')
  }

  constructor(props){
    super(props);
    this.state = {isLoading : false};
    this.state = {foods: []};
    //invoke based on click event
    /**
     * this part will bind the function and execute itself whenever constructor loads //this function needs to be invoked from any function of the lifecycle to execute
     */
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
      this.load_food_items();
  }

  //plain function to just retrieve the food item details 
  load_food_items () {
    console.log('load food items')
    axios.get('https://demo3313523.mockable.io/fooditems')
      .then(response => this.setState({foods: response.data},
                        this.setState({isLoading: !this.state.isLoading})
        ))
  }

  render() {
    console.log('rendering');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />                    
          <LoadFoodItems load={this.handleClick.bind(this)}/>
          <p className="App-link">
            Food Items :  { !this.state.isLoading ? 'Not Loaded': 'Loaded'} 
          </p>
          <div id="food_list" className="Food_List"> 
            <FoodList foods={this.state.foods}/>
          </div> 
                             
        </header>              
      </div>
    );
  }
}

setTimeout(() => {
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}, 30000);  

export default App;

