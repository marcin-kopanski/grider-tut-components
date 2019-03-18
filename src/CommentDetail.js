import React from 'react';

const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.comment.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.comment.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.comment.date.toLocaleDateString('pl-PL', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
                </div>
                <div className="text">{props.comment.content}</div>
            </div>
        </div>
    );
};

export default CommentDetail;