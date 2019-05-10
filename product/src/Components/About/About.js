import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const About = () => {
    return (
   <div>
    <div>
        <h4 className="abouttitle">About Scalable Solutions</h4>
        <hr></hr>
        <h6 className="write">Our goal is to become your one and only stop for all cutting edge technological needs.</h6><br />
        <h6 className="write">Our team is specialized in Software Development, Smart Contract Development and Social Media Marketing.</h6><br />
        <h6 className="write">We work with every client to figure out exactly what is neccessary to build their bussiness<br /> through Software Development and Social Media Marketing.</h6><br /> 
        <h6 className="write">You can count on us to bring you a completed product that is certain to grow your bussiness!</h6><br />
       </div>
        <h2 className="pb-3 pt-2" id="roadmap">Scalable Solutions Road Map</h2>
        <div className="page">
        <div className="page__demo">
            <div className="main-container page__container">
            <div className="timeline">
                <div className="timeline__group">
                <span className="timeline__year">Dapp Development</span>
                <div className="timeline__box">
                    <div className="timeline__date">
                    {/* <span className="timeline__day">Languages</span> */}
                    <span className="timeline__month">Languages</span>
                    </div>
                    <div className="timeline__post">
                    <div className="timeline__content">
                        <p id="p1">Our Development team builds complete Web Apps using languages such as React, css, and redux. For back-end projects we use Node.js, python and C</p>
                    </div>
                    </div>
                </div>
                <div className="timeline__box">
                    <div className="timeline__date">
                    {/* <span className="timeline__day">22</span> */}
                    <span className="timeline__month">More</span>
                    </div>
                    <div className="timeline__post">
                    <div className="timeline__content">
                        <p>Our projects use databases such as Firebase by google, Mongo Db, GraphSQl and MYSQL</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="timeline__group">
                <span className="timeline__year">Smart Contract Development</span>
                <div className="timeline__box">
                    <div className="timeline__date">
                    {/* <span className="timeline__day">Info</span> */}
                    <span className="timeline__month">Info</span>
                    </div>
                    <div className="timeline__post">
                    <div className="timeline__content">
                        <p>Our lead Smart Contract engineer builds smart contracts on top of Ethereum's Solidity and HyperLedger</p>
                    </div>
                    </div>
                </div>
                <div className="timeline__box">
                    <div className="timeline__date">
                    {/* <span className="timeline__day">22</span> */}
                    <span className="timeline__month">More</span>
                    </div>
                    <div className="timeline__post">
                    <div className="timeline__content">
                        <p>We use test driven development which means we rigorously test our applications. Doing so gurantees we deliver a bullet proof product</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="timeline__group">
                <span className="timeline__year">Web Development</span>
                <div className="timeline__box">
                    <div className="timeline__date">
                    {/* <span className="timeline__day">28</span> */}
                    <span className="timeline__month">Info</span>
                    </div>
                    <div className="timeline__post">
                    <div className="timeline__content">
                        <p>Our Web-development team has over 2 years of experience, We have built apps for Schools and Crypto Gambling sites</p>
                    </div>
                    </div>
                </div>
                <div className="timeline__box">
                    <div className="timeline__date">
                    {/* <span className="timeline__day">22</span> */}
                    <span className="timeline__month">More</span>
                    </div>
                    <div className="timeline__post">
                    <div className="timeline__content">
                        <p>Our Development team builds complete Web Apps using languages such as React, css, and redux. For back-end projects we use Node.js, python and C</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>

    )
}
export default About;