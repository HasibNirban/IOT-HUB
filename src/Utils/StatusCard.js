import React, { useState } from 'react'
const StatusCard = (props) => {
    console.log(props.data.active_status);
    const [toggle, settoggle] = useState(false)
    const deleteItem = async (id) => {
        console.log(`${id} is deleted`);
        try {
            const setHeader = {
                method: "DELETE",
                headers: {
                    Accept: "application/json"
                }
            }
            const res = await fetch(`https://hasibnirban.pythonanywhere.com/sensor/${id}/`, setHeader);
            const data = await res.json();
            console.log(props.data);
            props.fun(!props.data.active_status);
        } catch (error) {
            console.log(`The error is ${error}`);
        }

    }
    const ToggleItem = async (id) => {
        console.log(`${id} is toggled`);
        try {

            const setHeader = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    "active_status": !toggle
                })
            }
            const res = await fetch(`https://hasibnirban.pythonanywhere.com/sensor/${id}/toggle_status/`, setHeader);
            props.fun(!props.data.active_status);

        } catch (error) {
            console.log(`The error is ${error}`);
        }
    }

    return (
        <div className='card_2'>
            <input type='checkbox' name="checkbox" onClick={() => settoggle(!toggle)} />
            <h3>{props.data.sensor_id}</h3>
            <p>{props.data.sensor_name}</p>
            <p>{props.data.sensor_type}</p>
            <p>{props.data.sensor_value}</p>
            {props.data.active_status ? <p style={{ color: "green" }}>Online </p> : <p style={{ color: "red" }}>Offline </p>}
            {toggle ? <button onClick={() => deleteItem(props.data.id)}>Delete</button> : ""}
            {toggle ? <button onClick={() => ToggleItem(props.data.id)}>Toggle Status</button> : ""}
        </div>
    )
}
export default StatusCard;

