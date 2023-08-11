// Write your code here

import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, updateList, toggleIsLiked} = props
  const {name, comment, id, isLiked, initialClassName, date} = details
  const initial = name.slice(0, 1).toUpperCase()

  const onClickIcon = () => {
    updateList(id)
  }

  const onClickButton = () => {
    toggleIsLiked(id)
  }

  const isText = isLiked ? 'active' : 'in_active'

  const LikeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="d">
      <div className="initialContainer">
        <div className="nameContainer">
          <div className={initialClassName}>{initial}</div>
          <p className="name">{name}</p>
          <p className="p">{formatDistanceToNow(date)}</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <div className="lastContainer">
        <button
          type="button"
          className="dButton"
          data-testid="delete"
          onClick={onClickButton}
        >
          <img src={LikeImage} className="like" alt="like" />
          <p className={isText}>Like</p>
        </button>
        <button className="delIcon" type="button" onClick={onClickIcon}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="del"
          />
        </button>
      </div>
      <hr className="hori" />
    </li>
  )
}

export default CommentItem
