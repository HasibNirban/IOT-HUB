import React, { useEffect, useState } from 'react'
import './Stat.css';
import StatusCard from '../Utils/StatusCard';

const StatusBoard = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const setHeader = {
          headers: {
            Accept: "application/json"
          }
        }
        const res = await fetch('https://hasibnirban.pythonanywhere.com/sensor/', setHeader);
        const data = await res.json();
        console.log(data);
        setdata(data);
      } catch (error) {
        console.log(`The error is ${error}`);
      }
    }
    getData();
  }, [])

  const fun_cal = () => {
    console.log("funcal");
    setdata(data);
  }


  return (
    <>
      <div className='Main_body_item2'>
        <p>Status Board</p>

        <div className='status_child2'>
          {
            data.map((item, index) => {
              return <StatusCard data={item} fun={fun_cal} key={index} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default StatusBoard
