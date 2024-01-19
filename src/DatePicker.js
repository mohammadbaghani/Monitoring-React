import React, { useState, useEffect } from "react";



import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function F() {

  const today = new Date(); const [startDate, setStartDate] = useState(new Date()); const date = startDate.getFullYear();
  const dte = today.getFullYear();
  let v = dte - date

  return (<>
    <div className="wrapper-datapicker">


      <p className="middle">
        سن شما :
        {v} سال
      </p>
      <DatePicker className="child-datapicker" selected={startDate} onChange={(date) => setStartDate(date)} />

    </div>

  </>

  );
};


