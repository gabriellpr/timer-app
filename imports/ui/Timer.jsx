import React from "react";
import { TimerDisplay } from "./TimerDisplay";
import { createContainer } from "react-meteor-data";

     
Time = new Mongo.Collection('time');

export class Timer extends React.Component {

    constructor(props) {
        super(props);
        const handle =  Meteor.subscribe('time', {
            onReady: function() {

            }
        });
        handle.stop();
        handle.ready();
    }

    render() {
        return (
            <div>
                <TimerDisplay time={this.props.time} />
                <TimerDisplay time='today' />
            </div>
        );
    }
}

export default createContainer(() => {
    return {
        time: Time.find().fetch()
    };
}, Timer);