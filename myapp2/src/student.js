import { getByDisplayValue } from "@testing-library/react";
import React from "react";
class Student extends React.Component
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
        var st=[]
        var rn=(this.refs.rno.value);
        var nm=(this.refs.name.value);
        var eng=Number(this.refs.english.value);
        var mat=Number(this.refs.math.value);
        var sci=Number(this.refs.science.value);
        var obj=[{"rollno":rn,"name":nm,"english":eng,"math":mat,"science":sci}]
        for(var i=0;i<obj.length;i++)
        {
            st.push(obj);
            render();
            var data=""
            for(var i=0;i<st.length;i++)
            {
                {
                    data+="<tr><td>"+st[i].rn+"</td><td>"+st[i].nm+"</td><td>"+st[i].eng+"</td><td>"+st[i].mat+"</td><td>"+st[i].sci+"</td></tr>";
                }
                document.getElementById("myid").innerHTML=data;
            }
        }
    }
    render()
    {
        return(
            <div>
                roll no<input type="text" ref="rno"/><br/><br/>
                name<input type="text" ref="name"/><br/><br/>
                english<input type="text" ref="english"/><br/><br/>
                math<input type="text" ref="math"/><br/><br/>
                science<input type="text" ref="science"/><br/><br/>
                <input type="button" value="submit" onClick={this.Add.bind(this)} /><br/><br/>
                <div>
                    <table border="1">
                    <thead>
                        <tr>
                            <th>roll no</th>
                            <th>name</th>
                            <th>english</th>
                            <th>math</th>
                            <th>science</th>
                        </tr>
                    </thead>
                    <tbody id="myid">

                    </tbody>    
                    </table>
                </div>
            </div>
        )
    }
}
export default Student;