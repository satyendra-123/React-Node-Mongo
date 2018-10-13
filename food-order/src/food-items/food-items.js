import React, { Component } from 'react';
import Food from './food'
import {Table} from 'react-bootstrap'

export default class FoodList extends React.Component{
	render() {
		const foods = this.props.foods.map(food =>
			<Food key={food.item_name} food={food}/>
		);
		return (
			<Table striped bordered condensed hover responsive>
				<thead>
					<tr>
						<th></th>
						<th colSpan="2">Item Name</th>
                        <th colSpan="2">Ingredients</th>                        
						<th colSpan="2">Price</th>
						<th colSpan="2">Category</th>							
						<th></th>					
					</tr>
                </thead>
				{foods}
			</Table>
		)
	}
}

  