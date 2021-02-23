import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const actors = ['bappi', 'boby', 'Emion', 'Shapon', 'Sadman']
  const products =[
    {name: 'Photoshot', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
  ]
    return (
    <div className="App">
      <header className="App-header">
        <p>Working on React</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            actors.map(actor => <li>{actor}</li>)
          }
        </ul>
        <ul>
          {
            products.map(product => <li>{product.name}  {product.price}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {/* <Person name="Sakib khan" food="Biriany"></Person>
        <Person name="Omar Sani" food="mango"></Person> */}
      </header>
      <body>
      </body>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handelIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    // console.log("calling effect");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {console.log(users)}
        {
          users.map(user=> <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '5px',
  }
  const {name, price} = props.product; 
  console.log(name, price);
  return (
    <div style={productStyle}>
      <p>{name}</p>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  )
}
// function Person(props){
//   const personStyle ={
//     border: '2px solid red',
//     margin:  '10px',
//     padding: '10px',
//   }
//   console.log(props)
//   return (
//   <div style={personStyle}>
//   <p>Actor: {props.name}</p>
//   <p>Player: {props.food}</p>
//   </div>
//   )
// }
export default App;
