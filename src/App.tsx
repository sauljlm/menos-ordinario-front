import React from 'react';

import { IPost } from './interfaces/Post';
import NewPost from './components/newPost';
import PostList from './components/postList';

interface IState {
	posts: IPost[];
}

export default class App extends React.Component<any, IState> {
	constructor(props: any) {
    super(props);
    this.state = {
			posts: [],
		};
	}

	addNewPost(post: IPost) {
		const newObject = {
			id: post.id,
			title: post.title, 
			description: post.description, 
			pending: post.pending
		}
		this.setState({
			posts: [...this.state.posts, newObject]
		});
	}
	
	deletePost (id: number) {
		const posts: IPost[] = this.state.posts.filter(
			(posts: IPost) => posts.id !== id
		);
		this.setState({posts: posts});
	}

	changePending(index: number) {
		const currentTasks = this.state.posts;
		currentTasks[index].pending = !currentTasks[index].pending
		this.setState({posts: currentTasks});
	}

	newId() {
		return Math.floor(Math.random() * (1 - 1000 + 1) ) + 1;
	}

  render() {
    return (
      <div className="wrapper">
				<NewPost 
					addNewPost={this.addNewPost.bind(this)}
				/>
        <div className = "posts-container" >
					<PostList 
						posts = {this.state.posts}
						deletePost = {this.deletePost.bind(this)}
						changePending = {this.changePending.bind(this)}
					/>
        </div>
      </div>
    )
  }
}
