


function WeatherCard(props){
    const {name, main, weather, wind} = props.data;
    return(
        <div>
            {/* display the final data */}
            <h3><span>Name: </span>{ name }</h3>
            <h3><span>Temp: </span>{ main.temp }F</h3>
            <h3><span>Feels_Like: </span>{ main.feels_like}F</h3>
            <h3><span>Humidity: </span>{ main.humidity}</h3>
            <h3><span>Weather: </span>{ weather[0].description}</h3>
            <h3><span>Speed: </span>{wind.speed}</h3> 
        </div>
    )
}

export default WeatherCard;