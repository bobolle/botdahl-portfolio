import React from 'react';
import Project from './Project';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
        this.handleProjectInfo();
    }

    handleProjectInfo() {
        fetch('https://api.github.com/users/bobolle/repos')
        .then((response) => (response.json()))
        .then((data) => {
            this.setState({
                projects: data
            })
        })
    }

    render() {
        return (
            <div className="bg-accent rounded-xl shadow-lg p-4">
                <h5 className="text-primary font-bold text-lg">Github Projekt</h5>
                <div className="grid grid-cols-2 gap-4 text-base-content p-2">
                   {this.state.projects.map((project) => (
                        <Project 
                           key={project.id}
                           name={project.name}
                           description={project.description}
                           link={project.html_url}
                           language={project.language} 
                           stars={project.stargazers_count}
                       />
                    ))}
            
                </div>
            </div>
        );
    }
}
