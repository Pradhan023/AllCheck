import React from 'react'
import { Chart as ChartJs , defaults } from "chart.js/auto"
import { Bar, Doughnut , Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Chart = () => {
    const Data = useSelector(state => state.Todo.chartData)
    const Bardata = Data.bar;
    const DoughData = Data.doughnut
    const lineData = Data.line
    console.log(Data);
  return (
    <div className="bg-slate-200 h-[100vh] gridChart px-4">
        {/* first chart */}
        <div className="bg-white chart1">
           <Line 
           data = {{
            labels:lineData.map(i=>i.label),
            datasets:[
                {
                    label:"Revenue",
                    data:lineData.map(i=>i.revenue),
                    backgroundColor:"lightblue",
                    borderColor:"lightblue"
                }
            ]
           }} />
        </div>
        {/* second chart */}
        <div className="bg-white chart2">
        <Bar data={{
                labels:["A","B","C"],
                datasets:[
                    {
                        label:"Revenue",
                        data:Bardata.revenueData.map(i=>i),
                        backgroundColor:[
                            "blue"
                            ,"green",
                            "red"
                        ]
                    },
                    {
                        label:"Lose",
                        data:Bardata.lossData.map(i=>i),
                        backgroundColor:[
                            "lightgrey"
                        ]
                    },
                ],
                
            }}
            options={{
                plugins:{
                    Zoom:{
                        Zoom:{
                            WheelEvent
                        }
                    }
                }
            }}
             />
        </div>
        {/* third chart */}
        <div className="bg-white chart3">
            <Doughnut data={{
                labels:["A","B","C"],
                datasets:[
                    {
                        label:"Revenure",
                        data:DoughData.revenue.map(i=>i),
                        backgroundColor:[
                            "blue"
                            ,"green",
                            "red"
                        ]
                    }
                ],
            }} />
        </div>
    </div>
  )
}

export default Chart