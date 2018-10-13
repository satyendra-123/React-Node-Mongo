import React, { Component } from 'react';
import MyOrder from './common/myorder'
import {Button} from 'react-bootstrap'

const pStyle = {
	fontSize: '15px',
	textAlign: 'left'
};

export default class Food extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            foodItemSelected: false,
            myfood: {}        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);        
    }

    handleChange() {
        this.setState({foodItemSelected: !this.state.foodItemSelected});
    }        

    handleClick(){
        console.log('selected food has'+ this.props.food)
        this.setState({
            myfood: this.props.food
        });         
    }

	render() {
        const ingrediants = this.props.food.ingrediants.map(ingrediant =>
			<Ingrediant key={ingrediant.name} ingrediant={ingrediant}/>
		);
		return (
            <tbody style={pStyle}>
			<tr>
                <td><input type="checkbox"  value={this.state.foodItemSelected} onChange={this.handleChange} name="food"/></td>
				<td colSpan="2">{this.props.food.item_name}</td>
				<td colSpan="2">
                    <select>
                        {ingrediants}
                    </select>
                </td>                                                                
                <td colSpan="2">{this.props.food.price}</td>
                <td colSpan="2">{this.props.food.category}</td>                
                <td><Button onClick={this.handleClick}  bsStyle="success" bsSize="small">Order</Button></td>
			</tr>
            <tr></tr>
            <MyOrder myfood={this.state.myfood} foodItemSelected={this.state.foodItemSelected}/>                                                               
            <tr></tr>
        </tbody>
      	)
	}
}

class Ingrediant extends React.Component{
    render(){
        return (
                <option>
                    {this.props.ingrediant.name}
                </option>           
        )
    }
}