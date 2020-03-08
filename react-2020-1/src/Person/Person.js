import React from "react";
//import Radium from 'radium'

//es 6 stateless dumb functional component
import styles from "./person.module.css";
const rand = Math.random();
if (rand > 0.7) {
  throw new Error(" Custom Error for random value "+ rand);
}
const person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        Hi i am {props.name} {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

/* class person extends Component{
    render( ){
            return (
            <p>Person age is: {Math.floor(Math.random() * 30)}</p>
            )            
    }
} */

//export default Radium(person);

export default person;
