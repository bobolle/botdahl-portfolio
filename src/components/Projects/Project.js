import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default class Project extends React.Component {
    render() {
        return(
            <div className="mt-2 bg-botdahl-500 rounded-xl shadow-xl transition hover:scale-105 hover:bg-botdahl-100 duration-200">
                <a href={this.props.link} target="_blank" rel="noreferrer">
                    <div className="p-2 w-full h-full">
                        <div className="absolute text-botdahl-800">
                            <AiFillGithub className="w-5 h-5" />
                        </div>
                        <div className="text-center text-md font-bold text-botdahl-800">
                            {this.props.name}
                        </div>
                        <div className="text-md text-botdahl-700">
                            {this.props.description}
                        </div>
                <div>
                </div>
                    </div>
                </a>
            </div>
        );
    }
}
