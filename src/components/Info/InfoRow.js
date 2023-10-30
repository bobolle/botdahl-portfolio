import React from 'react';

export default class InfoRow extends React.Component {
    render() {
        return(
                <div className="bg-secondarybg rounded-xl shadow-md transition hover:scale-[1.03] duration-200">
                    <a href={this.props.link} target="_blank" rel="noreferrer">
                        <div className="p-2">
                            <div className="mr-2 align-middle inline-block text-primary">{this.props.icon}</div>
                            <div className="align-middle inline-block">
                                <div className="font-bold text-primary">{this.props.title}</div>
                                <div className="text-secondary">{this.props.description}</div>
                            </div>
                        </div>
                    </a>
                </div>
            );
        }
    }
