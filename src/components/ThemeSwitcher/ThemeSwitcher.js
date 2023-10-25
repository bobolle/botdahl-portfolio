import React from 'react';

export default class ThemeSwitcher extends React.Component {
    componentDidMount() {
        if (('theme' in localStorage)) {
            if (localStorage.theme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        }
    }

    switchMode() {
        if (!('theme' in localStorage)) {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
        } else {
            if (localStorage.theme === 'dark') {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        }
    }

    render() {
        return (
            <button className="bg-stone-300 p-1 rounded" onClick={this.switchMode}>
                Switch
            </button>
        );
    }
}
