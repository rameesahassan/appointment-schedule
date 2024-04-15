import React from 'react';
import './App.css';
import Selectcomponent from './components/selection/Selectcomponent';
import MyCalendar from './components/calendar/moment';

function App() {
    return (
        <div className="App">
            <Selectcomponent />
            <MyCalendar />
        </div>
    );
}

export default App;
