
import './App.css';
import Header from './components/header';
import ProductSection from './components/productSection';
import React, { Component } from 'react'

 class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productList :[]
    }; 
  }
  componentDidMount(){
    this.getProducts();
  }
  getProducts = async () =>{
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json()
    // console.log(json)
    this.setState({
      productList:json
    })
  }
  render() {
    return (
      <div className="App">
      <Header products={this.props.total?this.props.total:null}/>
      
        <ProductSection products={this.state.productList}/>
      </div>
    )
  }
}

export default App;