import React from 'react'
//eslint-disable-next-line
import Accordion from './components/Accordion';
import Search from './components/Search';

//eslint-disable-next-line
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
]
export default () => {
     
    return (
        <div>
            <Search />
        </div>
    );
}