import React from 'react';

export default class ThemeSwitcher extends React.Component {
    componentDidMount() {
        if (('theme' in localStorage) && localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }

    switchTheme() {
        if (!('theme' in localStorage) || localStorage.theme === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }

    render() {
        return (
            <button className="bg-stone-300 dark:bg-botdahl-600 p-1 rounded shadow-sm" onClick={this.switchTheme}>
                Switch Dark/Light
            </button>
        );
    }
}
