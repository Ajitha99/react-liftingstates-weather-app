

function Input(props) {
    return(
        <div>
                {/* Search bar, input form with button */}
                <input type="text" value ={ props.value} onChange={props.onChange} placeholder="enter zip"/>
                <button type="submit" onClick = {props.onClick}>Submit</button>
        </div>
    )
}

export default Input;