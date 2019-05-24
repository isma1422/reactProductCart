import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionDelete from 'material-ui/svg-icons/action/delete'


const styles = {
  customWidth: {
    width: 500,
  },
};




class ProductCart extends Component{
	constructor(props){
		super();
		this.state = {
			cart:props.cart,
			items:[],
		}
		
	}
	render(){
		var newItems = [];
		var total = 0;
    	for (let i = 0;i < this.props.cart.length; i++ ) {
      		newItems.push(<ListItem value={i} key={i} primaryText={`${this.props.cart[i].name} x ${this.props.cart[i].quantity}`} secondaryText={`Precio: ${this.props.cart[i].price*this.props.cart[i].quantity}`} 
      			rightIconButton={<DeleteButton index={i} onDeleteClick={this.props.onDeleteClick}
      		 />}  />);
      		 total += this.props.cart[i].price*this.props.cart[i].quantity;
    	};
		return(
			<div className="CartContainer">
				<CartList items={newItems} total={total}></CartList>
			</div>
		);
	}
}


class CartList extends Component{
	constructor(props){
		super();
		this.state = {
			items:props.items,
		}
	}
	render(){
		return(
			<div>
				<List style={styles.customWidth} >
				<Subheader>Carrito</Subheader>
				{this.props.items}
				<ListItem disabled="true">Total: ${this.props.total}</ListItem>
				</List>
			</div>
		);
	}
}


function DeleteButton(props) {
  return (
     <div className="ListDeleteButton">
      <ActionDelete  onClick={() => props.onDeleteClick(props.index)}/>
    </div>
  );
}


export default ProductCart;