function Conditional1(){
const isstock=false;
return(
<div>
        <h2>Product Details..</h2>
        {isstock ?(                  /* ?: is called ternary operator */

            <p style={{color:"green"}}>Available in stock</p>
        ):(
            <p style={{color:"red"}}>Out of stock</p>
        )



        }
        </div>
    );

}
export default Conditional1;