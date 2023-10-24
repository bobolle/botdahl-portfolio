import React from 'react';

export default class InfoRow extends React.Component {
    render() {
        return(
            <div className="text-center grid grid-cols-2 mx-4 shadow-md">
                <div className="bg-white font-bold rounded-l p-2">
                    {this.props.title}
                </div>
                <div className="bg-white rounded-r p-2">
                    {this.props.answer}
                </div>
            </div>
        );
    }
}
