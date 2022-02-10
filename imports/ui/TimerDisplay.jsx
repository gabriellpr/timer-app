import React from "react";

export class TimerDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => this.setState({ time: new Date().toLocaleString() }), 1000);
    }
    render() {
        return (
            <div>
                Time: {this.props.time}
            </div>
        );
    }
}