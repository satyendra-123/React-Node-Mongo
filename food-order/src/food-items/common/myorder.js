import React from 'react'

const foodStyle = {
    color: '#7FFF00'
};

const foodStyle1 = {
    color: '#D2691E'
};

export default class MyOrder extends React.Component{
    constructor(props){
        super(props);                
    }

    render(){
        const isFoodItemSelected = this.props.foodItemSelected;
          
        if(!isFoodItemSelected){
                return null;
          }
          else if(isFoodItemSelected && !this.props.myfood.item_name){

                return (
                    <tr style={foodStyle1}>
                        <td></td>
                        <td>click on the order button</td>
                    </tr>
                )
          }
          else{
            return  (          
            <tr style={foodStyle}>
                <td></td>
                <td colSpan="4">
                Please verify Your Order:  
                </td>
                <td> 
                {this.props.myfood.category}&nbsp;&nbsp;
                   
                </td>
                <td>                    
                {this.props.myfood.price}&nbsp;&nbsp;

                </td>
                <td>                    
                {this.props.myfood.item_name}&nbsp;    
                </td>
                <td>                    
                </td>
            </tr>   
            )     
          }              
    }
}