import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


 function App() {
  return (
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header(){
  //const style={color:"red", fontSize:"48px",textTransform:"uppercase"}

  return(
    <header className='header'>   
    <h1>Fast react Pizza co.</h1>
    </header>
    
  )

}



function Menu(){
const pizzas=pizzaData;
 // const pizzas=[];
  const numpizza=pizzas.length;

  return(
    <div className='menu'>
     
      <h2>our menu</h2>
     {numpizza>0 ? (<ul className='pizzas'>
        {pizzas.map((pizza)=>(
          <Pizza pizzaobj={pizza} key={pizza.name}/>
        ))}
      </ul>):(<p>we are still in the working.please come later !</p>)
      }


      


    
       {/**<Pizza name={pizza.name} ingredients={pizza.ingredients}/>   */}
     
     { /*<Pizza name="pizza spinach"
             ingredients="Tomato, mozarella, spinach, and ricotta cheese"      
             photoName="pizzas/spinaci.jpg"
             price={10}     
                   />
      <Pizza  name= "Pizza Funghi"
              ingredients= "Tomato, mozarella, mushrooms, and onion"
              price={12}
             photoName="pizzas/funghi.jpg"
    />
    






  */}
    </div>
    



  )

}
function Pizza({pizzaobj}){
  return( 
  
  <li className={`pizza ${pizzaobj.soldOut?"sold-out":""}`}>
    <img src={pizzaobj.photoName}  alt='' />
       <div>
        <h1>{pizzaobj.name}</h1>
        <p>{pizzaobj.ingredients}</p>
       
        {pizzaobj.soldOut ?(<span>SOLD OUT</span>):( <span>{pizzaobj.price}</span>)}
        {/**CAN ALSO  WRITE in this way   <span>{pizzaobj.soldout?"SOULD OUT":pizzaObj.price}<span> */}

        </div>  
    
   </li>
)}

function Footer(){


  const hour =new Date().getHours();
  console.log(hour)
  const OpenHour=0;
  const closeHour=22;
  const isopen=hour>=OpenHour&&hour<=closeHour;
  console.log(isopen);
  //if(hour>=OpenHour && hour<=closeHour)alert("we are current in the work");
  //else alert("sorry we are not open the cafe");

  return(
            
         <footer className='footer'>
        {isopen ?<Order closeHour={closeHour}/>:(<p>we are happy when you visit between {OpenHour}:00 and {closeHour}:00 </p>)}
         </footer>

  )        }
function Order({closeHour}){
  
  return(
      <div className='order'>
    <p>we are open until {closeHour.closeHour}:00 until this time you can visit and can order in the online</p> 
    <button className='btn'>order now</button>
  </div>
  

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p>developed by H/michael </p>
  </React.StrictMode>
);

