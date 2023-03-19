import userEvent from "@testing-library/user-event";
import React, { useRef, useState } from "react";
const Student=()=>
{
    const [studentdata,setStudentData]=useState([])
    const txtrno=useRef();
    const txtname=useRef();
    const txtqualification=useRef();
    const txtpercentage=useRef();
    const AddStudent=()=>{
        var r=txtrno.current.value;                    
        var n=txtname.current.value;                    
        var q=txtqualification.current.value;                    
        var p=txtpercentage.current.value; 
        var st={"rno":n,"Name":n,"qualification":q,"percentage":p};
        setStudentData(data=>[...data,st]);                   
    }
    const clearData=()=>
    {
        txtrno.current.value="";
        txtname.current.value="";
        txtqualification.current.value="";
        txtpercentage.current.value="";
    }
    return(
        <div>
        <div className="container">
        <div className="row" >
        <div className="col-md-4" >
        <table>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>Roll no</td>
                        <td><input type="text" ref={txtrno} /></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" ref={txtname} /></td>
                    </tr>
                    <tr>
                        <td>qualification</td>
                        <td><input type="text" ref={txtqualification} /></td>
                    </tr>
                    <tr>
                        <td>percentage</td>
                        <td><input type="text" ref={txtpercentage} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} >
                        
                        <input type="button" className="btn btn-primary" value="submit" onClick={()=>AddStudent()} />
                        
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-md-8" >
        <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Roll no</th>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {studentdata.map((d,k)=>(
                        <tr key={k}>
                            <td>{d.rno}</td>
                            <td>{d.Name}</td>
                            <td>{d.qualification}</td>
                            <td>{d.percentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
            
            
        </div>
    )
}
export default Student;