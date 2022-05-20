import React, { useState } from 'react';
import { Component } from 'react';
import {
    Link
  } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <>
                <div className="shadow-md w-full flex flex-row fixed opacity-100 bg-white top-0 left-0">
                    <div className="flex text-2xl  bg-white py-4">
                        <span className=' text-black mx-2'>
                            <ion-icon name="newspaper-outline"></ion-icon>
                        </span>
                        <div className="heading">
                            NewsApp
                        </div>
                    </div>
                    <div className="links ">
                        <div className='hidden sm:flex flex-row justify-between text-l py-5 px-3 ' >
                            <div className="conatiner mx-4">
                                <Link to="/">Home </Link>
                            </div>   
                            <div className="container mx-4">
                                <Link to="/business">Business</Link>
                            </div>      
                            <div className="container mx-4">
                                <Link to="/entertainment">Entertainment</Link>
                            </div>      
                            <div className="container mx-4">
                                <Link to="/sports">Sports</Link>
                            </div>     
                            <div className="container mx-4">
                                <Link to="/technology">Technology</Link>
                            </div>     
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

