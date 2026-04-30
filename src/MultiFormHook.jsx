//useform()

import react from "react";
import { useForm } from "react-hook-form";
export default function MultiFormHook()
{
    const [register,handleSubmit]=useForm();
    const onSubmit=data=(data)=>{
        console.log(data);
    };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type = "text"

                placeholder="Enter your Name"
                {...register("name")}/><br/>

                <input type = "email"
                placeholder="Enter your Email"
                {...register("email")}/><br/>
                
                <input type = "password"
                placeholder="Enter your Password"
                {...register("password")}/><br/>
                <button type = "submit">Submit</button>
            </form>
        </div>

    );
}