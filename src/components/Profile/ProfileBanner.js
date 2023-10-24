import React from 'react';

export default class ProfileBanner extends React.Component {
    render() {
        return(
            <div className="bg-stone-100 rounded shadow-md">
                <h2 className="p-4 text-center font-bold text-xl text-stone-600">Olle Dahlström</h2>

                <div className="text-center text-md font-mono text-stone-500">
                    Junior Software Developer | Junior Fullstack Developer
                </div>

                <button className="flex mx-auto my-2 bg-stone-300 hover:bg-stone-400 border border-stone-400 text-stone-500 text-sm rounded">
                    <a href="../assets/resume.txt">
                        <p className="p-1">DOWNLOAD RESUME</p>
                    </a>
                </button>

            </div>
        );
    }
}
