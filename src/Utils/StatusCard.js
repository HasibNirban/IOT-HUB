import React, { useState } from 'react'
const StatusCard = ({ data, fun }) => {
    console.log(data.active_status);
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
            console.log(data);
            fun();
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
            const data = await res.json();
            fun();

        } catch (error) {
            console.log(`The error is ${error}`);
        }
    }

    return (
        <div className='card_2'>
            <input type='checkbox' name="checkbox" onClick={() => settoggle(!toggle)} />
            <h3>{data.sensor_id}</h3>
            <p>{data.sensor_name}</p>
            <p>{data.sensor_type}</p>
            <p>{data.sensor_value}</p>
            {data.active_status ? <p style={{ color: "green" }}>Online </p> : <p style={{ color: "red" }}>Offline </p>}
            {toggle ? <button onClick={() => deleteItem(data.id)}>Delete</button> : ""}
            {toggle ? <button onClick={() => ToggleItem(data.id)}>Toggle Status</button> : ""}
        </div>
    )
}
export default StatusCard;

