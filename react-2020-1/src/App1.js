import React, { Component } from "react";
import Person from "./Person/Person";
//import Radium ,{StyleRoot} from 'radium'
import styles from './app.module.css'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
  
class App1 extends Component {

  
  state = {
    persons: [
      {
        id: '1',
        name: "maximum",
        age: "12"
      },
      {
        id: '2',
        name: "manual",
        age: "31"
      },
      {
        id: '3',
        name: "stephini",
        age: "32"
      }
    ],
    otherState: "IT IS OTHER STATE",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    let personIndex  = this.state.persons.findIndex(p => p.id === id)
    const person = {
        ...this.state.persons[personIndex]
    }
    //const person1 = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value
    let persons = this.state.persons;
    persons[personIndex] = person
   
    this.setState({
      persons: persons      
    });
  };

  deletePersonHandler = (index) => { 
    const persons = this.state.persons
    persons.splice(index, 1)
    this.setState({persons: persons  })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const btnClass = [styles.Button]

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundry>
              <Person
                name={person.name}
                age={person.age}
                click={()=> this.deletePersonHandler(index)}
                key={person.id}  
                changed={(event) => this.nameChangeHandler(event, person.id)}
              /></ErrorBoundry>
            );
          })}   
        </div>
      );
      /* 
      Radium
      btnStyle.backgroundColor = 'red'
      btnStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      } */
      btnClass.push(styles.Red)

    }

    let assigned_classes = []
    if(this.state.persons.length <= 2){
      assigned_classes.push('red')      
    }   
    if(this.state.persons.length <= 1){
      assigned_classes.push('bold')
    }

    return (
     
      <div className={styles.App}>
        <h1>Hi i am react app</h1>
        <p className={assigned_classes.join(' ')} >This is really working !</p>

        <button className={btnClass.join(' ')}  onClick={this.togglePersonHandler}>
            Switch
        </button>        
        {persons}
      </div>
    
    );
  }
}

//export default Radium(App1);
export default App1 