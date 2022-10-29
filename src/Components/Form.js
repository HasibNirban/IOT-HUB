import React,{useState} from 'react'
import './Form.css';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

export default function Form(){

    const[deviceData,setdeviceData]=useState({sensor_id:"",sensor_name:"",sensor_type:"1",
    sensor_value:"",sensor_data:"",sensor_status:false})
    const sendData=(e)=>{
    setdeviceData({...deviceData,[e.target.name]:e.target.value});
    }
    const SubmitDetails=async(e)=>{
        e.preventDefault();
        console.log( JSON.stringify(deviceData));
        try {
            const setHeader = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(deviceData)
            }
            const res = await fetch(`https://hasibnirban.pythonanywhere.com/sensor/`, setHeader);
            if(res.status===201)
           {
            swal("Good job!", "You Data Has Been Saved ", "success");
        }
            else
           { 
            swal("Ah oh!", `Some Problem with code ${res.status}`, "warning");
        }
       
        }catch (error) {
                console.log(`The error is ${error}`);}
    }

    return(
        <div className='form_register'>
        <section >
            <div className="register">
            <div className="col-1">
              <h2>Registration !!</h2>
              <span>Register Your Device Here</span>


              <form id='form' className='flex flex-col' onSubmit={SubmitDetails} >
                  <input type="text" placeholder='Sensor_id'  name="sensor_id" onChange={sendData} />
                  <input type="text" placeholder='Sensor_name' name="sensor_name" onChange={sendData} />
                  <select class="form-control" name="sensor_type" onChange={sendData} >
            <option value="1">TEMPERATURE_SENSOR</option>
            <option value="2">PRESSURE_SENSOR</option>
            <option value="3">HUMIDITY_SENSOR</option>
            <option value="4">FLUID_SENSOR</option>
            <option value="5">PIEZO_SENSOR</option>
      
    </select>
                  <input type="text" placeholder='Sensor_value' name="sensor_value" onChange={sendData}  />
                  <input type="text" placeholder='sensor_data' name="sensor_data" onChange={sendData} />
                  <button className="btn" onClick={SubmitDetails} type="submit">Register Device</button>
                 <Link to="/Dashboard" id='a_link'><p >View all listed Devices Here!!!</p></Link> 
              </form>
              </div>

            <div className="col-2">
                <img src="/Icons/img1.jpg" alt=""/>
            </div>

            </div>
        </section>
        </div>
    )
}