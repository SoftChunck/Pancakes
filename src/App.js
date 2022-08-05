import './App.css';
import { useState } from 'react';
import Navbar from './Containers/Navbar/Navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Prediction from './Containers/Prediction/Prediction';
import React from 'react';

let min,sec;
min = (new Date().getMinutes())+(new Date().getMinutes()%5 == 0 ? 4 : new Date().getMinutes()%5 == 4 ? 0  : new Date().getMinutes()%5 == 2 ? 2 : new Date().getMinutes()%5 == 3 ? 1 : new Date().getMinutes()%5 == 1 ? 3: 0  );
sec = new Date().getSeconds();

function App() {  
  const [price_history,setprice_history] = useState(['3.854','3.854','3.854','3.854']);
  const [cakeprice,setcakeprice] = useState('3.854');
  const [lastprice,setlastprice] = useState(3.854);
  const [timer,settimer] = useState("5:00");
    
  React.useEffect(()=>{
    let intv =  setInterval(() => {
      let Mmin = new Date().getMinutes();
      let Ssec = new Date().getSeconds();
      if(min-Mmin <= 0)
      {
        if(Ssec == 0){   
          clearInterval(intv); 
          min = new Date().getMinutes()+4;
          sec = new Date().getSeconds(); 
          setlastprice(cakeprice);
          for(let x=0;x<3;x++)
          {
            price_history[x] = price_history[x+1];
          }
          price_history[3] = cakeprice.toString();
          setprice_history(price_history);
          console.log(price_history);
        }
      }
    setcakeprice((parseFloat(cakeprice)+(0.001)).toFixed(3))
    settimer(`${min-Mmin}:${60-Ssec}`)
  });
  return () => clearInterval(intv);
});

  return (
    <div className="App p-0">
     <Navbar cakeprice = {cakeprice}/>
      <div className='Space'>
        <Prediction cakeprice={cakeprice} timer={timer} lastprice = {lastprice} price_history={price_history} />
      </div>
    </div>
  );
}

export default App;
