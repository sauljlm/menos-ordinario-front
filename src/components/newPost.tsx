import React from 'react';
import { IPost } from '../interfaces/Post';

class NewPost extends React.Component<IPostFormProps, any> {
	constructor(props: IPostFormProps) {
    super(props);
    this.state = {
      title : '',
      description: ''
    }
  }

  newId(): number {
		return Math.floor(Math.random() * (1 + 1000 + 1) ) + 1;
  }

  handleNewPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPost: IPost = {
      id: this.newId(),
      title: this.state.title,
      description: this.state.description,
      pending: true
    }
    this.props.addNewPost(newPost);
    this.setState({title: '', description: ''});
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="form-container form">
        <form onSubmit={e => this.handleNewPost(e)}>
          <div className="form__item">
            <label>Title:</label>
            <input 
              type = "text" 
              name = "title"
              onChange = {e => this.handleInputChange(e)} 
              value = {this.state.title}
            />
          </div>
          <div className="form__item">
            <label>Description:</label>
            <textarea 
              name = "description"
              onChange = {e => this.handleInputChange(e)}
              value = {this.state.description}
            ></textarea>
          </div>
          <div className="form__item form__btn-container">
            <button type="submit" className="form__send">Save</button>
            <button type="reset" className="form__reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

interface IPostFormProps {
  addNewPost: (post: IPost) => void;
}

export default NewPost;