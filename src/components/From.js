

import React,{useState} from 'react'

const From = () => {

  const[p,setP]= useState(0);
  const[r,setR]= useState(0);
  const[t,setT]= useState(0);

  
  const pChangeHandler=(event)=>{
     console.log("P Changed");
     console.log(event.target.value);
   setP(Number(event.target.value));

  
        
};

  
  const rChangeHandler=(event)=>{
    console.log("R Changed");
    console.log(event.target.value);
   setR(Number(event.target.value)); 
  
 
};
   
  const tChangeHandler=(event)=>{
    // console.log("T Changed");
    // console.log(event.target.value);
   setT(Number(event.target.value));

 
         
};
 console.log(t);


  return (<>
  
   <div class="form-group">
 <label> P
  <input  type="text"  
  class="form-control"  
  value={p.p}  
  
   placeholder="Enter P" id="p" 
    onChange={pChangeHandler}/>
    </label> 
   <h1>P={p}</h1>
   </div>



   <div class="form-group">
   <label>R
   <input  type="text" 
   className="form-control"  
   value={r.r}  
   
   placeholder="Enter R" id="r" 
    onChange={rChangeHandler}/>
    </label>
   <h1>R={r}</h1>
   </div>


   <div claclassNamess="form-group">
   <label>T 
    <input  type="text" 
   className="form-control"  
   value={t.t}  
    
   placeholder="Enter T" id="t"  
   onChange={tChangeHandler}/>
  </label>
   <h1>T={t}</h1> 
    <h1>SI={p*r*t/100}</h1>
 
   </div>
   </>
  )
}

export default From;