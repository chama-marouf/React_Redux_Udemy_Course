import axios from 'axios';

const KEY = 'AIzaSyDEq2mOW1Ba5r-fTwcbLQCa_C3wyamHcCk';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }

});