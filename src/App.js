import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'


import Ticket from './components/Ticket/Ticket'
import Shop from './Shop/Shop'
import TodoList from './TodoList'

import F from './DatePicker'
import Chart from './Chart'

import './App.css';
import { useLocation } from "react-router-dom";

import PieChart from './PieChart'




export default function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);






  return (
    <>
      <div >

        <Header />


        <Routes>

     
     

          <Route path='/لیست انجام وظایف ' element={<Ticket />} />
    
          <Route path='/' element={<TodoList />} />


    
       


          <Route path='/دیتا' element={<F/>} />             
          <Route path='/چارت' element={<Chart/>} /> 
          
          
          <Route path='/م' element={<PieChart/>} /> 

        </Routes>







      </div>
    </>
  )
}
