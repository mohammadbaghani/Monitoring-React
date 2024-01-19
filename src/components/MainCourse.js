import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CoursesData from './../CoursesData';
import './Maincourse.css';
import { PiBookOpenTextLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChalkboardTeacher } from "react-icons/fa";
import { useEffect } from 'react'; import { CgDanger } from "react-icons/cg";
export default function MainCourse() {


    useEffect(() => {
        AOS.init();
    }, [])

    const [show, setShow] = useState(true);

    const showinfo = () => {

        setShow(current => !current);


    }
    let params = useParams()

    let mainCouseData = CoursesData.find(course => course.id == params.courseID)


    const mystyle = {
        width: `${mainCouseData.percent}` + '%',

    };

    return (



        <body className="main-course-body">




            <h2 className="p-course range" >


                میزان سختی :


            </h2>

            <div class="progress">
                <div class="progress-bar " role="progressbar"

                    style={mystyle}




                    aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">{mainCouseData.percent}%</div>
            </div>


            <h2 className="p-coursee" data-aos="fade-left" >


                {mainCouseData.title}

            </h2>




            <h2 className="p-course" >



                <div className={show ? 'showlup ' : 'hidden'} style={{ width: '80%', height: '300px' }} >

                    <div className='teacher-panel'>
                        <div className='teacher'>
                            استاد دوره
                            <br>
                            </br>

                            {mainCouseData.teacher}
                        </div>


                        <div className='teacher course-book'>

                            <img src={mainCouseData.img} className="image-teacher course-img" />


                            کتاب
                            <br>
                            </br>

                            {mainCouseData.book}
                        </div>

                    </div>


                    <p className="more-info">
                        اطلاعات دوره
                    </p><CgDanger className="danger-icon" />

                    <h className="hover-left-child-price left-one" >




                        قیمت<h className="hover-left-child-price-adad top-p">
                            {mainCouseData.price}   هزارتومان
                        </h>
                        <        PiBookOpenTextLight className="book-one " />
                    </h>


                    <h className="hover-left-child-online left-one">






                        رده سنی                        <h className="hover-left-child-price-adad online age-book">
                            {mainCouseData.age}
                        </h>

                        <IoIosMan className="book-one " />
                    </h>



                </div>




                <div className={show ? 'showlup' : 'hidden'} style={{ width: '80%', height: '300px' }} >






                    <h className="hover-left-child-time">


                        مدت دوره
                        <h className="hover-left-child-price-adad time-book">
                            {mainCouseData.sath}
                        </h>      <FaRegClock className="book-one " />
                    </h>

                    <h className="hover-left-child-sath">


                        تدریس انلاین
                        <h className="hover-left-child-price-adad sath-book">
                            {mainCouseData.online}

                        </h>
                        <HiOutlineStatusOnline className="book-one " />
                    </h>

                </div>




            </h2>





            <img src={mainCouseData.image} className="image-teacher" />

            <li className="h-course">
                توضیحات دوره


                <br>
                </br>


                {mainCouseData.description}



            </li>



        </body>


    )
}
