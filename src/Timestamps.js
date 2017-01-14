import React, {Component} from 'react';

class Timestamps extends Component{
    coverTime = function(timestamp) {
        let mintes = Math.floor(timestamp / 60);
        let seconds = timestamp - (mintes * 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        timestamp = mintes + ':' + seconds;
        return timestamp;
    }

    render() {
        return (
            <div className="Timestamps">
                <div className="Time Time--current">{this.coverTime(this.props.currentTime)}</div>
                <div className="Time Time--total">{this.coverTime(this.props.duration)}</div>
            </div>
        );
    }
}

module.exports = Timestamps;