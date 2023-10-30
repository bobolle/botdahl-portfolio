import React from 'react';

export default class InfoRow extends React.Component {
    render() {
        return(
            <a href={this.props.link} target="_blank" rel="noreferrer">
                <div className="p-2 bg-secondarybg rounded-xl shadow-md transition hover:scale-[1.03] duration-200">
                    <div className="inline-block mx-2 text-primary">{this.props.icon}</div>
                    <div className="inline-block">
                        <div className="font-bold text-primary">{this.props.title}</div>
                        <div className="text-secondary">{this.props.answer}</div>
                    </div>
                </div>
            </a>
        );
    }
}
