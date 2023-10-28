import React from 'react';

export default class InfoRow extends React.Component {
    render() {
        return(
            <a href={this.props.link} target="_blank" rel="noreferrer">
                <div className="p-2 text-center bg-botdahl-500 rounded-xl shadow-xl transition hover:scale-[1.03] hover:bg-botdahl-100 duration-200">
                    <div className="font-bold text-sm text-botdahl-800 rounded-l p-1">
                        {this.props.title}
                    </div>
                    <div className="text-sm text-botdahl-800">
                        {this.props.answer}
                    </div>
                </div>
            </a>
        );
    }
}
