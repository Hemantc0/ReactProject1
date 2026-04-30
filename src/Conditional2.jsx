function Conditional2()
{
     const isLogin=true;
   
    
            if(isLogin ) {   //exeuted when contion is true
              
                   return <h1>welcome to conditional rendering</h1>;
                        
            }
            else
            {
               return <h1>invalid login</h1>;
            }
       
    
}
export default Conditional2;