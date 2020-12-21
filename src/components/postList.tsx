import React from 'react';

import { IPost } from '../interfaces/Post';

class PostList extends React.Component<IPostListProps, any> {

  render(): JSX.Element[] {
    return this.props.posts.map((posts: IPost, index: number) => {
      return (
        <div key={posts.id} className="task">
          <div className={posts.pending === true ? 'task__header' : 'task__header task__header--done'}>
            <h2 className="task__title">{posts.title}</h2>
          </div>
          <div className="task__desc-container">
            <p className="task__description">{posts.description}</p>
          </div>
          <div className="task__btn-container">
            <button onClick={() => this.props.changePending(index)} className="task__btn-complete">
              Done
            </button>
            <button onClick={() => this.props.deletePost(posts.id)} className="task__btn-delete">
              Delete
            </button>
          </div>
        </div>
      )
    });
  }
}

interface IPostListProps {
  posts: IPost[];
  deletePost: (id: number) => void;
  changePending: (id: number) => void;
}

export default PostList;