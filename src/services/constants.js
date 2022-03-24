import axios from 'axios';

const CLIENT_URL = "https://api.openweathermap.org/data/2.5/forecast?zip=";
const API_TOKEN = "a93d546fd2d64120b7bd6350ab26620d"

//fiveday forcast - 5days
//api: https://api.openweathermap.org/data/2.5/forecast?zip=${}&cnt=5&appid=${}

//inputValue - zip code is input for api call
export const fetchData = async (inputValue) =>{
    try {
        console.log("In constants.js")
        const response = await axios.get(`${CLIENT_URL}${inputValue}&cnt=5&appid=${API_TOKEN}`)
        // console.log(response);
        const { data } = response;
        return data;
        // return response;
        // const lists = data.list;
        // console.log(lists);
        // return lists;
    } catch (error) {
        console.log(error)
    }
}