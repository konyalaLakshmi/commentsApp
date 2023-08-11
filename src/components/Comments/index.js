import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  onChangeName = e => {
    this.setState({nameInput: e.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() + initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      date: new Date(),
      initialClassName: initialContainerBackgroundClassName,
    }

    this.setState(prev => ({
      commentsList: [...prev.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  toggleIsLiked = id => {
    this.setState(prev => ({
      commentsList: prev.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  updateList = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState({
      commentsList: filteredList,
    })
  }

  renderAddComment = () => {
    const {commentsList} = this.state

    return commentsList.map(each => (
      <CommentItem
        key={each.id}
        details={each}
        updateList={this.updateList}
        toggleIsLiked={this.toggleIsLiked}
      />
    ))
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="bg">
        <div className="c">
          <div className="container">
            <h1 className="h">Comments</h1>
            <p className="p">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                className="input"
                value={nameInput}
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                className="t"
                value={commentInput}
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                rows="6"
              />
              <br />
              <button type="submit" className="b">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr className="hline" />
        <div className="second">
          <div className="inner">
            <div className="in">{commentsList.length}</div>
            <p className="para">comments</p>
          </div>
          <ul className="ul">{this.renderAddComment()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
