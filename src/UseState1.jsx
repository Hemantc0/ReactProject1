import { UseState } from "react";

function UseState1()
{
    const[count,setCount]=useState(0);
   console.log(count);

 /* let count=0;
    function increment()
    {
        count++;
        console.log(count);
    }*/

return(
<div>
      <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
       </div>
    
);
}

export default UseState1;