import React from 'react';

export default class Degree extends React.Component {
    render() {
        return(
            <div className="mt-2 bg-secondarybg rounded-xl shadow-lg p-2">
                <div className="text-sm text-neutral">
                    {this.props.year}
                </div>

                <div className="text-md font-bold text-primary">
                    {this.props.degree}
                </div>

                <div className="text-md text-secondary">
                    {this.props.school}
                </div>
            </div>
        );
    }
}
