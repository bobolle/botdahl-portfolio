import React from 'react';

export default class ProfileBanner extends React.Component {
    render() {
        return(
            <div className="bg-botdahl-500 rounded-xl shadow-xl p-1">

                <h2 className="p-4 text-center font-bold text-5xl text-botdahl-800">Olle Dahlström</h2>

                <div className="text-center text-md font-mono text-botdahl-700">
                    Junior Software Developer | Junior Fullstack Developer
                </div>

                <button className="flex mx-auto my-2 bg-botdahl-600 transition duration-200 hover:scale-105 hover:bg-botdahl-300 hover:text-botdahl-800 text-botdahl-100 text-sm rounded">
                    <a href={this.props.link} download="Olle_Dahlström_CV.pdf">
                        <p className="p-1">DOWNLOAD RESUME</p>
                    </a>
                </button>

            </div>
        );
    }
}
