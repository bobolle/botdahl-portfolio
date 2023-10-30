import React from 'react';

export default class Project extends React.Component {
    render() {
        return(
            <div className="mt-2 bg-secondarybg rounded-xl shadow-xl transition hover:scale-105 duration-200">
                <a href={this.props.link} target="_blank" rel="noreferrer">    
                    <div className="p-2 w-full h-full">
                        <div className="text-center text-md font-bold text-primary">
                            {this.props.name}
                        </div>
                        <div className="text-md text-neutral">
                            {this.props.description}
                        </div>
                    </div>

                </a>
            </div>
        );
    }
}
