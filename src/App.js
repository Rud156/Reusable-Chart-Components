import React, { Component } from 'react';
import './App.css';

// import LayoutHolder from './ReComponents/LayoutHolder';
import LayoutHolder from './components/LayoutHolder';

class App extends Component {
    render() {
        return (
            <div className="container">
                <LayoutHolder />
            </div>
        );
    }
}

export default App;
