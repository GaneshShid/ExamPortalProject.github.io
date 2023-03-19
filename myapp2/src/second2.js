import React from "react";
class second2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            rno:1,
            name:"ganesh",
            data:[10,20,30,40,50,60]
        }
    }
    render ()
    {
        return(
            <ul>
                {this.state.data.map((d,k)=>(
                    <li key={k}>{}</li>
                ))}
            </ul>
        )
    }  
}
export default second2;