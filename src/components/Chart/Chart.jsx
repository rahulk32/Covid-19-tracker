import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';

function Chart ({dailyData}) {
    var data,cases, recovered, deaths;
    if (Object.keys(dailyData).length === 0 && dailyData.constructor === Object)
    {
        return "";
    }
        cases= dailyData.cases;
        deaths =dailyData.deaths;
        recovered =dailyData.recovered;
        var a=Object.keys(cases), b=Object.values(cases), c=Object.values(recovered);
        var d=Object.values(deaths)
        
        data = {
            labels: a,
            datasets: [
          {
                label: "Infected",
                data: b,
                fill: false,
                borderColor: "#blue",
                backgroundColor: "rgba(0, 0, 255, 0.5)"
          },
          {
            label: "Recovered",
            data: c,
            fill: false,
            borderColor: "#green",
            backgroundColor: "rgba(0, 255, 0, 0.5)"
          },
          {
            label: "Death",
            data: d,
            fill: true,
            borderColor:"#red",
            backgroundColor: "rgba(255, 0, 0, 0.5)"
          }
        ]
        };

    return (
        <div className={styles.container}>
            <Line data={data}/>
        </div>
    );

}

export default Chart;
