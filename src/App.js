import './App.css';
import React,{useState} from 'react';


function App() {
  const [time , setTime]= useState(25);
  const [interv , setInterv] = useState();
  const [color ,setColor] = useState();

 const start = () =>{
   run();
   setInterv(setInterval(run,1000));
 };
 const reset = () => {
   clearInterval(interv);
   setTime(25)
 };
 var timer = time;
 const run = ()=>{
   timer--;
   if(timer===20){
     setColor('black');
   }
   if(timer===10){
   setColor('yellow');
   }
   if(timer===5){
     setColor('white')
 }
 if(timer>=0){
   return setTime(timer)
 }
}
  return (
    <div className="timer" style={{backgroundColor:color}}>
    <h3>{time}</h3>
      <button onClick={()=>start()}>Click</button>
      <button onClick={()=>reset()}>Reset</button>
    </div>
  );
}

export default App;