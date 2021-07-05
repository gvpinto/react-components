import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Glenn" timeAgo="Today at 4:00PM" commentText="Great Party" avatar={faker.image.avatar()} />
            <CommentDetail author="John" timeAgo="Today at 2:00AM" commentText="Hello There" avatar={faker.image.avatar()} />
            <CommentDetail author="Pinto" timeAgo="Yesterday at 6:00PM" commentText="How are you?" avatar={faker.image.avatar()} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

if (module.hot) {
    module.hot.accept();
}