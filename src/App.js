import { fetchData } from './services/constants'
import { useState, useEffect } from 'react';
import './App.css';
import '../src/components/Input.css'
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';


function App() {

  const [ weatherData, setWeatherData] = useState({});

  const [inputValue, setInputValue] = useState('');




//one way of defining state: --- 
    // const [weatherData, setWeatherData] = useState({
    //   weather: {},
    //   value: ' '
    // })

  //Weather data is where we store the response data from our API call
  //value is where we keep track of what is being inserted into 
  //our input field
//second way of defining states: ----- 
    // const [ weatherData, setWeatherData] = useState({})

    // const [inputValue, setInputValue] = useState('')

//You will have to create functions that handle event changes 
//also for submit changes as well



//handleChange() ==>???
//set - value?

const handleOnChange = (event) =>{
  const val = event.target.value;
  setInputValue(val);
}


// async handleSubmit(e) function: --
// some value = e.target.value
// setValue(value);
// we have to pass useState value to  fetchData method(value) 
// we have to store response data one variable
// setWeatherData(with the response from the api call)

const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const temp  = await fetchData(inputValue);
      // console.log(temp);
      setWeatherData(temp);
      setInputValue('');
    } catch (error) {
      console.log(error);
    }
   
}


useEffect(() =>{
  console.log('Weather data' , weatherData)
 
},[weatherData])








  return (
    <div className="App">
        <div className='gp-div'>
            <h1>Weather Application</h1>
            <Input onChange = {(e) => handleOnChange(e)} 
                    onClick = {(e) => handleSubmit(e)}
                    value = {inputValue}
            />
            <div className='weather-card-div'>
                <WeatherCard data= {weatherData}
                />
            </div>
        </div>
            
            
    </div>
  );
}

export default App;











// const[submit, setSubmit] = useState(false);
// const handleSubmit = async (e) =>{
//   e.preventDefault();
//   setSubmit(true);
 
// }

// useEffect(() =>{
// if(submit === true){
//   (async () =>{
//     try {
//       const temp  = await fetchData(inputValue);
//       // console.log(temp);
//       setWeatherData(temp);
//       setInputValue('');
//       setSubmit(false);
//     } catch (error) {
//       console.log(error);
//     }
// })
// ()
// }

// },[weatherData])