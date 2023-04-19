import React, { useEffect, useState } from 'react';
import profile_photo from '../../mine.png'
import './Sheet.css'
import toast from 'react-simple-toasts';

const Sheet = ({ totalTime }) => {
    function refreshPage() {
        toast('WOW!, Activity Completed');
        setInterval(() => {
            window.location.reload(false);
        }, 3000);
    }
    const [break_time, setbreakTime] = useState(0);
    useEffect(() => {
        setbreakTime(localStorage.getItem('Break') || 0);
    }, []);
    useEffect(() => {
        localStorage.setItem('Break', break_time);
    }, [break_time]);
    return (
        <div>
            <div className="self">
                <div className="profile">
                    <img src={profile_photo} alt="" />
                    <h3>Anik Kumar Nath</h3>
                </div>
                <div className="health">
                    <div className="specific">
                        <h3>75<sub>kg</sub></h3>
                        <p>Weight</p>
                    </div>
                    <div className="specific">
                        <h3>5.6</h3>
                        <p>Height</p>
                    </div>
                    <div className="specific">
                        <h3>25<sub>yrs</sub></h3>
                        <p>Age</p>
                    </div>
                </div>
            </div>

            <div className="break">
                <h3>Add a Break</h3>
                <div className="break-time">
                    <button onClick={() => setbreakTime(10)}>10m</button>
                    <button onClick={() => setbreakTime(15)}>15m</button>
                    <button onClick={() => setbreakTime(20)}>20m</button>
                    <button onClick={() => setbreakTime(25)}>25m</button>
                    <button onClick={() => setbreakTime(30)}>30m</button>
                </div>
            </div>

            <div className="Exercise-Details">
                <h3>Exercise Details</h3>
                <div className='time'>
                    <p>Exercise time:</p>
                    <p>{totalTime} min</p>
                </div>
                <div className='time'>
                    <p>Break time:</p>
                    <p>{break_time} min</p>
                </div>
            </div>

            <div className="Activity-Completed">
                <button onClick={refreshPage}>Activity Completed</button>
            </div>
        </div>
    );
};

export default Sheet;