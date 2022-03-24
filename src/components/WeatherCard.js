


function WeatherCard(props){
    return(
        <div>
            {/* display the final data */}
            
            <ul>
                {props.map((card) =>{
                    return <li>{card}</li>
                })}
                
            </ul>
        </div>
    )
}

export default WeatherCard;