import React from "react";
class Second extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            rno:1,
            name:"abcd"
        }
    }
    render(){
        return(
            <div>
                <h1>wellcome</h1>
                Roll no={this.state.rno}
                <br/>
                name={this.state.name}
            </div>

        )
    }
}
export default Second;