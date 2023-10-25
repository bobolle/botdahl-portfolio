import React from 'react';

export default class InfoRow extends React.Component {
    render() {
        return(
            <div className="grid grid-cols-2 mx-4 shadow-md text-sm">
                <div className="text-left pl-4 bg-botdahl-700 text-sm text-botdahl-200 rounded-l p-1">
                    {this.props.title}
                </div>
                <div className="text-right pr-4 bg-botdahl-600 text-sm text-botdahl-100 rounded-r p-1">
                    <a href={this.props.link} target="_blank" rel="noreferrer">
                        {this.props.answer}
                    </a>
                </div>
            </div>
        );
    }
}
