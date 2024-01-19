import { Navbar, Container, Nav } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import './Navbar.css'
import { useNavigate, Outlet } from 'react-router-dom';





export default function Header() {



    let navigate = useNavigate()
    return (
        <div >




            <Container className='container-valed-navbar' >

                <Navbar className='valed-navbar' >




                    <Nav className='nav'>
             





                        <Link className='main-navy' to="/چارت">چارت
                            <Link className='child-navy ' to="/">
                            </Link>


                        </Link>


                        <Link className='main-navy' to="/دیتا">محاسبه تاریخ تولد                           <Link className='child-navy ' to="/">
                            </Link>


                        </Link>


             
                        <Link className='main-navy ' to="/" > 
                     
                        لیست


                        افراد
                            <Link className='child-navy navcheck' to="/">
                            </Link></Link>
              


                    </Nav>



                </Navbar>



            </Container>






   
        </div>
    )
}






























