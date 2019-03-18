import React from 'react';
import ReactDOM from 'react-dom';

import faker from "faker";

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail comment={{avatar: faker.image.avatar(), author: faker.name.firstName(), date: faker.date.past(), content: faker.lorem.sentence()}} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail comment={{avatar: faker.image.avatar(), author: faker.name.firstName(), date: faker.date.past(), content: faker.lorem.sentence()}} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail comment={{avatar: faker.image.avatar(), author: faker.name.firstName(), date: faker.date.past(), content: faker.lorem.sentence()}} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail comment={{avatar: faker.image.avatar(), author: faker.name.firstName(), date: faker.date.past(), content: faker.lorem.sentence()}} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail comment={{avatar: faker.image.avatar(), author: faker.name.firstName(), date: faker.date.past(), content: faker.lorem.sentence()}} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
