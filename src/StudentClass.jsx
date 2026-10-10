import { Component } from "react";

class StudentClass extends Component{
    render(){
        return(
            <div>
                <h1>welcome,{this.props.name}</h1>
            </div>
        )
    }
}

export default StudentClass;