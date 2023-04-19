import React, { useEffect, useState } from 'react';
import logo from '../../fit_logo.svg';
import Card from '../Card/Card';
import QA from '../QA/QA';
import Sheet from '../Sheet/Sheet';
import './Home.css'

const Home = () => {

    //collect instruments information from api data
    const [instruments, setInstruments] = useState([]);
    //side effect: load api data
    useEffect(() => {
        fetch('exercise_instruments.json')
            .then(res => res.json())
            .then(data => setInstruments(data))
    }, []);
    //collect instruments information from api data
    const [QusAns, setQusAns] = useState([]);
    //side effect: load api data
    useEffect(() => {
        fetch('Q-A.json')
            .then(res => res.json())
            .then(data => setQusAns(data))
    }, []);

    const [spendTime, setspendTime] = useState(0);
    const needTime = (time) => {
        let newtime = spendTime + time;
        setspendTime(newtime);
    }
    return (
        <div className="home-decoration">
            <div className="activities">
                <div className="header">
                    <img src={logo} className="page-logo" alt="" />
                    <h1>Keep Fit Always</h1>
                </div>
                <h2>Select your choice</h2>
                <div className='card-orientation'>
                    {
                        instruments.map((instrument, index) => <Card key={index} image={instrument.image} title={instrument.title} about={instrument.about} time={instrument.time} needTime={needTime}></Card>)
                    }
                </div>
                {
                    QusAns.map((qa, index) => <QA key={index} Question={qa.Q} Answer={qa.A}></QA>)
                }
            </div>
            <div className="information-sheet">
                <Sheet totalTime={spendTime}></Sheet>
            </div>
        </div>
    );
};

export default Home;