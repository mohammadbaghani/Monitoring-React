import React, { useState, useEffect } from 'react'
import Header from './Header'
import Todo from './Todo'
import './TodoList.css'
import Chart from './Chart'
import Numbers from './Numbers'
import PieChart from './PieChart'

export default function TodoList() {

    const [A, setA] = useState([]);

    const [B, setB] = useState([]);
    const [C, setC] = useState([]);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])
    function todoTitleHandler(event) {



        let newTodoObject = {
            id: A.length + 1,

            title: event.target.value,

        }
        setA([...A, newTodoObject]);

        const savedItem = localStorage.getItem("name");


        const parsedItem = JSON.parse(savedItem);

        setB(parsedItem);
        console.log(B)





    }
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(A));
    }, [A]);

    function r(event) {


        let newTodoObject = {
            id: C.length + 1,

            t: event.target.value,

        }
        setC([...C, newTodoObject]);


    }
    return (



        <>




            <div className='containerinput'>



                <header class="todo-header">
                    مهارت

                </header>
                <div className="input-parent">


                    <input

                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="input-right"
                        type="email"
                        placeholder="شهر"

                    />

                    <input

                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="input-left"
                        type="password"
                        placeholder="نام و نام خانوادگی"


                    />
                </div>
                <button className="input-center">
                    ثبت نام
                </button>

                <p className="all-todos">
                    اینجا
                    انتخاب مهارت !

                </p>

                <form className="all-todos">

                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={todoTitleHandler}>
                            <option className="option-todo" value="js">js</option>
                            <option value="html" className="option-todo">Html</option>
                            <option value="css" className="option-todo">Css</option>
                            <option value="React" className="option-todo">React</option>
                        </select>
                    </div>
                </form>
                <p className="left-all">
                    اینجا

                    نمره دهید



                </p>

                <form className=" left-all">







                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={r}>

                            <option value="5" className="option-todo">پنج</option>
                            <option value="10" className="option-todo">ده</option>
                            <option className="option-todo" value="15">پانزده</option>

                            <option className="option-todo" value="20">بیست</option>

                        </select>
                    </div>
                </form>



                <div className="todo-container">
                    <ul className="todo-list">

                        <Todo {...A[0]} />
                        <Todo {...A[1]} />
                        <Todo {...A[2]} />
                        <Todo {...A[3]} />
                    </ul>




                    <ul className="todo-list">


                        <Numbers {...C[0]} />
                        <Numbers {...C[1]} />
                        <Numbers {...C[2]} />
                        <Numbers {...C[3]} />
                    </ul>



                    <div className="vvvv">


                        <Chart {...C[0]} {...B[0]} />


                        <Chart {...C[1]} {...B[1]} />





                        <Chart {...C[2]}{...B[2]} />
                        <Chart {...C[3]} {...B[3]} />

                        <PieChart />


                    </div>


                    <div className="piechart">



                        <PieChart className="piechart" />


                    </div>






                </div>


            </div>
        </>
    )

}
