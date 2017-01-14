import React from 'react';

var Scrubber = React.createClass({
    render: function() {
        return (
            <div className="Scrubber">
                <div className="Scrubber-Progress"></div>
            </div>
        );
    }
});

module.exports = Scrubber;