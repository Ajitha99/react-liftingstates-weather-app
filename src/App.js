import { fetchData } from './services/constants'
import { useState,useEffect} from 'react';
import './App.css';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';


function App() {

  const [ weatherData, setWeatherData] = useState({})

  const [inputValue, setInputValue] = useState('')


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


//async handleSubmit(e) function: --
// some value = e.target.value
//setValue(value);
//we have to pass useState value to  fetchData method(value) 
//we have to store response data one variable
//setWeatherData(with the response from the api call)

const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('handleSubmit');
    console.log(inputValue);
    const temp = fetchData(inputValue);
    console.log(temp)
   
    setWeatherData(temp);
}

// console.log(weatherData);
//not sure::: Do we write useEffect - similar to FruitContainer
//[weatherData]

// useEffect(() =>{
//   console.log('Weather data' , weatherData)

// },[weatherData])

const array = Object.values(weatherData)
console.log(array);
  return (
    <div className="App">
           
            {/* <WeatherCard cards = {weatherData} /> */}
            <Input onChange = {(e) => handleOnChange(e)} 
                    onClick = {(e) => handleSubmit(e)}
            />
    </div>
  );
}

export default App;
