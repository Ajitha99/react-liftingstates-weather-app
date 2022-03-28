
import './WeatherCard.css'

function WeatherCard(props){
    const {name, main, weather, wind} = props.data;
    return(
        <div className="parent-weatherCard">
            {/* display the final data */}
            {(typeof props.data.main != 'undefined')?(
            <div className="child-weatherCard">
            <h3><span>City Name: </span>{ name }</h3>
            <h3><span>Temp: </span>{ Math.round(main.temp) }F</h3>
            <h3><span>Feels_Like: </span>{ Math.round(main.feels_like)}F</h3>
            <h3><span>Humidity: </span>{ main.humidity}</h3>
            <h3><span>Weather: </span>{ weather[0].main}</h3>
            <h3><span>Speed: </span>{wind.speed}</h3>
            </div> ):('')}
        </div>
    )
}

export default WeatherCard;