import React from 'react'
import {Bar} from "react-chartjs-2" ;

const proposalData = [10,20,30] ;

function BarChart() {
    return (
       <Bar 
            data={{
                labels:["Accepted","Declined","Inprogress"],
                datasets:[
                    {
                        label:"No of proposals",
                        data:proposalData,
                        backgroundColor:["#2196f3","#f44336","#4caf50"]
                    }
                ]
            }}
            height={300}
            options={{ maintainAspectRatio: false ,responsive:true }}
       />
    )
}

export default BarChart
