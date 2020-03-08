import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

/* function App() {
  return (
    <div className="App">
     <h1>Hi i am react app</h1>
     <Person name="max" age="30"/> 
     <Person name="max1" age="31"> My Hobies: SWIM</Person>
      <Person name="max2" age="32"/> 
    </div>   
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am react app'));
}
 */
const App = () => {
  const [personState, setState] = useState({
    persons: [
       {
         name: "max",
         age : "12"
       },
       {
         name: "manu",
         age : "31"
       },
       {
         name: "stephin",
         age : "32"
       },
    ],
    showPersons: false
});

const [otherState, otherSetState] = useState( { otherState : "IT IS OTHER STATE"
})

const nameChangeHandler = event => {
  setState({
    persons: [
      {
        name: event.target.value,
        age: "21"
      },
      {
        name: "manu",
        age: "20"
      },
      {
        name: "stephin",
        age: "14"
      }
    ]
  });
};

const togglePersonHandler = () =>{
  const doesShow = personState.showPersons;
  setState({
      showPersons: !doesShow
  })
}

console.log('person state ', personState, otherState)
   const switchHandler = (newName) =>{
     // DOESN'T WORK personState.persons[0].age = 12
     setState({
      persons: [
        {
          name: newName,
          age : "21"
        },
        {
          name: "manu",
          age : "20"
        },
        {
          name: "stephin",
          age : "14"
        },
        ]
     })
   }

    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

     return (
      <div className="App">
      <h1>Hi i am react app</h1>
       {/* <button style={btnStyle} onClick={switchHandler.bind(this, 'MaxmillianGULAB')}>Switch</button> */}
       <button style={btnStyle} onClick={togglePersonHandler.bind(this)}>Switch</button> 
       { personState.showPersons === true?
         <div>
       <Person name={personState.persons[0].name} age={personState.persons[0].age} changed={nameChangeHandler}/> 
        <Person name={personState.persons[1].name} age={personState.persons[1].age}> My Hobies: SWIM</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/> 
       </div>
       : null
       }
      
     </div>   
     );   
}

export default App;
