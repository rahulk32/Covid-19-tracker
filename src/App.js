import React from 'react';
import styles from './App.module.css';
import { Cards, Chart,CountryPicker } from './components';
import { fetchdata } from './api';
import { fetchDailyData } from './api';
import coronaImage from './img/logo.png';

class App extends React.Component {
  state = {
    data: {},
    dailyData: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData= await fetchdata("");
    const fetchedGlobalDailyData= await fetchDailyData("");
    if(fetchedGlobalDailyData)
      this.setState({ dailyData: fetchedGlobalDailyData });
    this.setState({ data: fetchedData });
  }
  
  handleCountryChange = async (country) => {
    if(country==="global")
      window.location.reload(false);
      
    const fetchedData= await fetchdata(country);
    var fetchedDailyData= await fetchDailyData(country);
    if(country)
      fetchedDailyData=fetchedDailyData.timeline;
    else
    fetchedDailyData={};

    this.setState({ data: fetchedData, country: country, dailyData: fetchedDailyData });
  }

render() {
  const { data, country, dailyData } = this.state;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="covid-19 logo" />
      <Cards data={data} />
      <CountryPicker handleCountryChange ={this.handleCountryChange}/>
      <Chart dailyData= {dailyData} />
    </div>
  );
   }
}

export default App;
