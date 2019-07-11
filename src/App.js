import React, { useState, useEffect } from "react";
// StyleSheet
import "./App.css";
// Components
import POD from './components/POD'
import Header from './components/Header'
import { RingLoader } from 'react-spinners';
// Material UI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


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
    <Container  maxWidth="xl">
      <Box pt={5}>
        <div className="App">
          <Header date={date} setDate={setDate} setData={setData} data={data}/>

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
          <Box mt={8}>
          <h2>Today's Date: {data.date}</h2>
          </Box>
            <POD data={data}/>
          </>
          }
        </div>
      </Box>

    </Container>
  );
}

export default App;
