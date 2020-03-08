import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class Form extends Component{

    constructor(){
        super()
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState(() => {
          return {
            value
          };
        });
      }

      render() {
        return (
          <form>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        );
      }
}

ReactDOM.render(<Form />, document.getElementById("container"));
