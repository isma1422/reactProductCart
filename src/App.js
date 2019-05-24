import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductChooser.js';
import ProductCart from './ProductCart.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
  
  constructor(){
    super();
    this.state ={
      /*harcoded data*/
      products : [{id:1,name:'Manzana',imgUrl:'https://mejorconsalud.com/wp-content/uploads/2014/06/manzanas.jpg',price:10,description:'Descripcion de la manzana'},
                 {id:2,name:'Pera',imgUrl:'https://mejorconsalud.com/wp-content/uploads/2014/01/Peras-canasta.jpg',price:18,description:'Descripcion de la Pera'},
                 {id:3,name:'Naranja',
                  imgUrl:'https://agromagazine.es/wp-content/uploads/2018/03/naranja.jpg',price:7,description:'Descripcion de la Naranja'}],
      cart:[],
      value:0,
      quantity:1,
    }
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  
  /*Handles change in Product DropDownList*/
  handleChange = (event,index,value) =>this.setState({value});
  
  /*Handles change in Quantity Selector*/
  handleQuantityChange = (event,index,value) => this.setState({quantity:value});
  
  /*Handles cart's delete button*/
  handleDeleteClick(index){
    var newCart = this.state.cart;
    newCart.splice(index,1);
    this.setState({cart:newCart});
  }  

  /*Handles add to cart button*/
  handleAddClick(){
    var isProductInCart = false;
    var newCart = this.state.cart.slice();
    var product = this.state.products[this.state.value];
    /*Searchs for the product in the cart*/ 
    var newProduct = {id:product.id,name:product.name, price:product.price, description:product.description, quantity:this.state.quantity};
    for(let i = 0; i < newCart.length; i++){
        if(product.id == newCart[i].id){
          newCart[i].quantity += this.state.quantity;
          isProductInCart = true;
        }
    }
    /*if is not there add it*/
    if(!isProductInCart)
      newCart.push(newProduct);
    this.setState({cart:newCart});
  }
  
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
          <div className="ProductList">
            <ProductList products={this.state.products} value={this.state.value} onAddClick={this.handleAddClick} onChange={this.handleChange} onChangeQuantity={this.handleQuantityChange} quantity={this.state.quantity}/>              
          </div>
          <div className="ProductCart">
            <h1>Cantidad de productos: {this.state.cart.length}</h1>
            <ProductCart cart={this.state.cart} onDeleteClick={this.handleDeleteClick}/>
          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}


export default App;



