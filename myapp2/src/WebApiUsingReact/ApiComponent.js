import React,{useEffect,useRef,useState} from "react";
import axios from "axios";
const Api =()=>
{
    const [customer,setstates]=useState([]);
    const txtcname=useRef();
    const Addcustomer=()=>{
        var st={"customer_name":txtcname.current.value}; 

        axios({
            url:"http://localhost:9090/api/allcustomers",
            method:'post',
            data:st,
            contentType:'application/json'
        }).then((e)=>
        {
            console.log(e);
            FetchCustomer();
        })
    }
    useEffect (function(){
        // axios.get("http://localhost:9090/api/allcustomers").then((e)=>{
        //     console.log(e.data);
        //     setstates(e.data);
        // })

        FetchCustomer();

    },[])

    const FetchCustomer=()=>
    {
        axios({
            url:"http://localhost:9090/api/allcustomers",
            method:'get',
            contentType:'application/json'
        }).then((e)=>
        {
            console.log(e.data);
            setstates(e.data);
        })
    }
            return(
                <div>
                    <h2>Web Api</h2>
                    <table>
                        <tr>
                            <td>customer id</td>
                            <td><input type="text" ref={txtcname}/></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="submit" onClick={()=>Addcustomer()} /></td>
                        </tr>
                        
                    </table>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>customer id</th>
                                <th>customer name</th>
                                <th>city</th>
                                <th>email address</th>
                                <th>mobile number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.map((d,k)=>(
                                <tr key={k}>
                                    <td>{d.customer_id}</td>
                                    <td>{d.customer_name}</td>
                                    <td>{d.city}</td>
                                    <td>{d.email_address}</td>
                                    <td>{d.mobile_number}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) 
}
export default Api;