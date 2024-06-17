import React, { useState, useEffect } from 'react'


import './TodoList.css'
import Chart from '../Chart'

import PieChart from '../PieChart'
import { Email } from '@mui/icons-material'

import ChartTemrature from '../ChartTemrature'

export default function TodoList() {

    const [A, setA] = useState([]);

    const [B, setB] = useState([]);
    const [C, setC] = useState([]);

    const [Temprature, setTemprature] = useState('')
    const [email, setEmail] = useState('')

    function todoTitleHandler(event) {



        let newTodoObject = {
            id: A.length + 1,

            title: event.target.value,

        }
        setA([...A, newTodoObject]);

        const savedItem = localStorage.getItem("name");


        const parsedItem = JSON.parse(savedItem);

        setB(parsedItem);






    }
    useEffect(() => {


        setInterval(() => {
            setEmail(Math.floor(Math.random() * 1000));


            setTemprature(Math.floor(Math.random() * 100));

        }, 600)


    }, []);


    return (



        <>



            <div className='containerinput'>

                <p class="headerone">

                <img src="temp.png" class="speed">


</img>

                    دمای لحظه ای نیروگاه<hr>

                    </hr>
                    {Temprature}
                    سانتی گراد
                </p>

                <p class="headerone tow">
                <img src="sp.png" class="speed">


</img>
                    سرعت تولید برق

                    <hr>

                    </hr>   {email}
                    مگاوات در هر ثانیه
                </p>
                <header class="todo-header down-t">




                </header>





                <div className="todo-container">







                    <div className="vvvv">


                        <Chart t={Temprature} className="child" />


                        <ChartTemrature n={email} className="child" />











                    </div>

                    <div className="vv">



                    <PieChart n={email} t={Temprature} />






</div>


                    




                </div>


            </div>
        </>
    )

}
