import React,{useState,useEffect} from 'react'
import './Form.css';
import { useParams,useNavigate } from 'react-router-dom'
export default function EditPage(){
    let product = useParams();
    let navigation=useNavigate();
    const[sensorData,setSensorData]=useState({
        sensor_id:"",
        sensor_name:"",
        sensor_type:"",
        sensor_value:"",
        active_status:""
    });
    
    const getData=async ()=>{
        try {
            const setHeader = {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
            const res = await fetch(`https://hasibnirban.pythonanywhere.com/sensor/${product.deviceId}/`, setHeader);
            const data=await res.json();

            setdeviceData(data);
            setSensorData(data);
        }catch (error) {
                console.log(`The error is ${error}`);}
        }
    const [deviceData,setdeviceData]=useState({});
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);
    const sendData=(e)=>{
     e.preventDefault();
    setSensorData({...sensorData,[e.target.name]:e.target.value});
    }
   

    const SubmitDetails=async(e)=>{
        e.preventDefault();
        console.log( JSON.stringify(sensorData));
        try {
            const setHeader = {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(sensorData)
            }
            const res = await fetch(`https://hasibnirban.pythonanywhere.com/sensor/${product.deviceId}/`, setHeader);
            console.log("patch request",res.status);
            if(res.status===200)
              {
                navigation("/Dashboard");
            }
            else
                {
                alert("Data Not Updated");
            }
        }catch (error) {
                console.log(`The error is ${error}`);}
    }

    return(
        <section className='form_register'>
            <div className="register">
            <div className="col-1">
              <h2> EDIT DEVICE INFO HERE</h2>
              <span>Manage Your Device Information</span>
              <form id='form' className='flex flex-col'>
              <input type="text" placeholder='Sensor_id'  name="sensor_id" onChange={sendData} defaultValue={deviceData.sensor_id}/>
            <input type="text" placeholder='Sensor_name' name="sensor_name" onChange={sendData} defaultValue={deviceData.sensor_name}/>
            <select class="form-control" name="sensor_type" onChange={sendData} value={sensorData.sensor_type} >
            <option value="1">TEMPERATURE_SENSOR</option>
            <option value="2">PRESSURE_SENSOR</option>
            <option value="3">HUMIDITY_SENSOR</option>
            <option value="4">FLUID_SENSOR</option>
            <option value="5">PIEZO_SENSOR</option>
    </select>
                  <input type="text" placeholder='Sensor_value' name="sensor_value" onChange={sendData} defaultValue={deviceData.sensor_value}/>
                  <input type="text" placeholder='sensor_data' name="sensor_data" onChange={sendData} defaultValue={deviceData.sensor_data} />
                  <button className="btn" onClick={SubmitDetails} type="submit">Register Device</button>
              </form>
              </div>

            <div className="col-2">
                
            </div>
            </div>
            

        </section>
    )
}