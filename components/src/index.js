import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import Faker from 'faker'
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="Nice blog post"
                avatarSrc={Faker.image.avatar()}/>
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00PM"
                content="I like the subject"
                avatarSrc={Faker.image.avatar()}/>
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:00PM"
                content="I like the writing"
                avatarSrc={Faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

