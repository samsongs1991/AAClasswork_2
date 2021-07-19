import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date(); // new Date creates new obj
        this.interval_id;
    }
    
    tick() {
        // may have to bind the context here
        this.setState({date: new Date()});
    }

    componentWillUnmount() {
        clearInterval(this.interval_id); 
    }

    componentDidMount() {
        this.interval_id = setInterval(tick(), 1000);
    }

    render() {
        const time = `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
        return (
            <div>
                <h1>React works!</h1>
                <p>{time}</p>
            </div>
        )
    }
}

export default Clock;