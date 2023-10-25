import React from 'react';

export default class Job extends React.Component {
    render() {
        return(
            <div className="my-3">
                <div className="text-sm text-black">
                    {this.props.year}
                </div>

                <div className="text-md font-bold text-botdahl-800">
                    {this.props.job}
                </div>

                <div className="text-md text-botdahl-700">
                    {this.props.description}
                </div>
            </div>
        );
    }
}
