import React from 'react';

export default class Degree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: true,
			containsCourse: false
		}
	}

	toggleHidden() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}

	componentDidMount() {
		this.verifyCourses(this.props);
	}

	verifyCourses(props) {
		if (typeof this.props.courses !== 'undefined') {
			if (this.props.courses.length > 0) {
				this.setState({
					containsCourse: true
				});
			}
		}
	}

    render() {
        return(
            <div className="mt-2 bg-secondarybg rounded-xl shadow-lg p-2">
				<div className="flex justify-between items-stretch">
					<div className="text-md font-bold text-primary">
						{ this.props.degree }
					</div>

					<div className="text-right text-sm text-neutral">
						{ this.props.year }
					</div>
				</div>

				<div className="text-left text-secondary">
					{ this.props.school }
				</div>

				<button onClick={() => this.toggleHidden()} className="flex mx-auto p-1 my-1 text-sm bg-secondary text-neutral rounded">
					Läs mer
				</button>
				{ !this.state.isHidden && (
				<div className="text-secondary mt-2">
					{ this.props.description }
					<p className="my-1">Programmet innehåller kurser som:</p>
					{ this.state.containsCourse && (this.props.courses.map(
						(course) => (
							<li>{course}</li>
						)
					)) }
				</div>
				) }
            </div>
        );
    }
}
