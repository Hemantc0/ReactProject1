function EventHandling1() {
 const handleClick=()=>{

        alert("working with event handling.....");
    };
 return(

    <div>
        <button onClick={handleClick}>Click...</button>
    
    </div>
 );

}

export default EventHandling1;