import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Glenn" />
            <CommentDetail author="John" />
            <CommentDetail author="Pinto" />
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