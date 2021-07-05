import faker from "faker";
import React from "react";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Glenn'
          timeAgo='Today at 4:00PM'
          content='Great Party!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='John'
          timeAgo='Today at 2:00AM'
          content='Hello There'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Pinto'
          timeAgo='Yesterday at 6:00PM'
          content='How are you?'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
