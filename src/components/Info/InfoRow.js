import React from 'react';

export default class InfoRow extends React.Component {
    render() {
        return(
            <a href={this.props.link} target="_blank" rel="noreferrer">
                <div className="p-2 text-center bg-secondarybg rounded-xl shadow-xl transition hover:scale-[1.03] duration-200">
                    <div className="font-bold text-sm text-primary rounded-l p-1">
                        {this.props.title}
                    </div>
                    <div className="text-sm text-secondary">
                        {this.props.answer}
                    </div>
                </div>
            </a>
        );
    }
}
