import React, { useState, useEffect } from "react";
// import axios from 'axios';
import "./App.css";
import POD from './components/POD'
import DateForm from './components/DateForm'
import { RingLoader } from 'react-spinners';

function App() {
  const [data, setData] = useState({})
  const [date, setDate] = useState('')

  useEffect( ()=> {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=KAPw9jnNWGfetGNA5hfushESHKrcFg82XxZ1odgR${date}`)
      .then(res => res.json())
      .then( pod => {
        console.log("COMPONENT MOUNTED", pod);
        setData(pod);

      } )
      .catch(err => console.log("COMPONENT MOUNTED, BUT THERE'S A PROBLEM", err))
    }, [date])

  return (
    <div className="App">

      <h1>Astronomy Picture of the Day!</h1>
      { !data.url ?
      <div className="loader">
        <RingLoader
          sizeUnit={"px"}
          size={100}
          color={'#123abc'}
          loading={true}
        />
      </div>
      :
      <>
      <h2>Today's Date: {data.date}</h2>
      <DateForm  date={date} setDate={setDate} setData={setData} />
      <POD data={data}/>
      </>
      }
    </div>
  );
}

export default App;
