import axios from 'axios';

const url1= "https://corona.lmao.ninja/v2/";
const url2= "?yesterday=true";
const dailyurl1= "https://corona.lmao.ninja/v2/historical/";
const dailyurl2="?lastdays=200";
var url, dailyurl;
export const fetchdata = async (country) => {
    
    if(country)
    {
        url=`${url1}countries/${country}${url2}`;
    }
    else
    {
        url=`${url1}all${url2}`;
    }

    try {
        const {data: { cases, recovered, deaths, updated}} = await axios.get(url);

        return { cases, recovered, deaths, updated };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async (country) => {
    try {
        if(country!=="")
        {
            dailyurl= `${dailyurl1}${country}${dailyurl2}`;
        }
        else
        {
            dailyurl= `${dailyurl1}all${dailyurl2}`;
        }
        const { data } = await axios.get(dailyurl);
        return data;
    }catch(error) {
        console.log(error);
    }
}
export const fetchCountries = async () => {
    try{
        const { data } = await axios.get('https://corona.lmao.ninja/v2/countries?yesterday=true&strict=true&query')

        const countries = data.map( (curr) => {
            return curr.country;
        } );

        return countries;
    } catch (error) {
        console.log(error);
    }
}