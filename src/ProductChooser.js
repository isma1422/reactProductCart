import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  customWidth: {
    width: 250,
  },
};

class ProductList extends Component{
  constructor(props){
    super();
    this.state = {
      products:props.products,
      value:props.value,
    }
  }
  
  render(){
    return (
          <div>
          <div className="DropDownContainer">
      		<DrowpDownList products={this.state.products} value={this.props.value} onChange={this.props.onChange}/>
          </div>
          <div className="ProductListChild">
            <div className="ImageContainer">
              <img src={this.state.products[this.props.value].imgUrl} className="ProductImage"/>
            </div>
            <div className="InfoContainer">
              <h1>{this.state.products[this.props.value].name}</h1>
              <h4>{this.state.products[this.props.value].description}</h4>
              <QuantitySelector quantity={this.props.quantity} onChange={this.props.onChangeQuantity} />
              <h4>Precio:${this.state.products[this.props.value].price}</h4>
              
            </div>
            <div className="ButtonContainer">              
            	<AddButton onAddClick={this.props.onAddClick}/>              
            </div>
          </div>
          </div>
    ); 
  }

}

/*Component for the list of products*/
class DrowpDownList extends Component{   
  constructor(props) {
    super(props);
    var items = [];
    for (let i = 0;i < props.products.length; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={props.products[i].name}/>);
    }
    this.state = {
      value: props.value,
      products: props.products,
      items: items,
    }
  }
  
  render(){
    return (
      <div>
        <br />
        <DropDownMenu
          value={this.props.value}
          onChange={this.props.onChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          {this.state.items}  
        </DropDownMenu>
      </div>
    );
  }
}

/*Component for the Quantity Selector*/
class QuantitySelector extends Component{
	constructor(){
		super();
		var quantityItems = [];
		for (let i = 1; i <= 100; i++ ) {
		  quantityItems.push(<MenuItem value={i} key={i} primaryText={`Cantidad: ${i}`} />);
		}
		this.state = {
			value : 1,
			quantityItems:quantityItems,
		}
	}

	render(){
		return(
			<div>
				<DropDownMenu
      				value={this.props.quantity}
		      		maxHeight={300}
		      		onChange={this.props.onChange}
		      		style={styles.customWidth}
		      		autoWidth={false}
		    	>
		      {this.state.quantityItems}  
		    </DropDownMenu>
			</div>
		);
	}
} 

/*Add to cart button*/
function AddButton(props) {
  return (
     <div>
      <FlatButton label="Agregar al carrito" onClick={props.onAddClick}/>
    </div>
  );
}

export default ProductList;