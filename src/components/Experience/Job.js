import React from 'react';

export default class Job extends React.Component {
    render() {
        return(
            <div className="mt-2 p-2 bg-secondarybg rounded-xl shadow-xl">
                <div className="text-sm text-neutral">
                    {this.props.year}
                </div>

                <div className="text-md font-bold text-primary">
                    {this.props.job}
                </div>

                <div className="text-md text-secondary">
                    {this.props.description}
                </div>
            </div>
        );
    }
}
