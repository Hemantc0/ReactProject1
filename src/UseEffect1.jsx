import { useEffect,useState } from "react";

function UseEffect1()
{
   const [count,setCount]=useState(0);
   useEffect(()=>{
    console.log("useEffect called");
   },[]);
   return(
<div>
        <h2>Count:{count}</h2>
    <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
   );

}

export default UseEffect1;