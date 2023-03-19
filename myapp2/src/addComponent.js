import React from "react";
class Add extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            msg:" "
        }
    }
    Add()
    {
        var n1=Number(this.refs.txtnum1.value);
        var n2=Number(this.refs.txtnum2.value);
        var c=n1+n2;
        this.setState({msg:"Add="+c});
    }
    render ()
    {
        return(
            <div>
                number1<input type="text" ref="txtnum1"/> <br/>
                number2<input type="text" ref="txtnum2"/> <br/>
                <input type="button" value="Add" 
                onClick={this.Add.bind(this)}/>
                <h1>{this.state.msg}</h1>
                
            </div>
        )
    }
}
export default Add;