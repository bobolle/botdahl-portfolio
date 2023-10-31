import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export default class Project extends React.Component {
    render() {
        return(
            <div className="bg-secondarybg rounded-xl shadow-lg transition hover:scale-105 duration-200">
                <a href={this.props.link} target="_blank" rel="noreferrer">    
                    <div className="flex flex-col justify-between p-2 w-full h-full text-base-content">
                        <div>
                            <div className="text-center text-md font-bold text-primary">
                                {this.props.name}
                            </div>
                            <div className="text-sm text-secondary">
                                {this.props.description}
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs">
                            <div className="flex text-left">
                                <div className="text-amber-200"><AiFillStar size={16}/></div>
                                <div className="mx-1 text-neutral">{this.props.stars}</div>
                            </div>
                            <div className="text-right text-neutral">{this.props.language}</div>
                        </div>
                    </div>

                </a>
            </div>
        );
    }
}
