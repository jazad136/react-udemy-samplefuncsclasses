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
                content="I do what I can."
                avatarSrc={Faker.image.avatar()}/>
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00PM"
                content="Thank you for the compliment."
                avatarSrc={Faker.image.avatar()}/>
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:00PM"
                content="Good job on the blog post."
                avatarSrc={Faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

