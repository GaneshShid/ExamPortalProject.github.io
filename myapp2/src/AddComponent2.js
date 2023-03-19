import React from "react";
class Addition extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            msg:""
        }
    }
    Add(){
        var n1=Number(this.refs.num1.value);
        var n2=Number(this.refs.num2.value);
        var n3=Number(this.refs.num3.value);
        var c=n1+n2+n3;
        document.getElementById("gs").value=c;
        // document.getElementById("ss").innerHTML=c;
        
        this.setState({msg:"total amount is: "+c})
    }
    render(){
        return(
            <div>
                rate<input type="text" ref="num1" onChange={this.Add.bind(this)}/> <br/>
                tax<input type="text" ref="num2" onChange={this.Add.bind(this)}/> <br/>
                quantity<input type="text" ref="num3" onChange={this.Add.bind(this)}/> <br/>
                total<input type="text" id="gs" />
            </div>
        )
    }
}
export default Addition 