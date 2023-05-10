// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="unordered-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji_btn"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-head">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love_emoji" />
        <h1 className="thankyou-text">Thank You!</h1>
        <p className="paragraph">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="container">
        <div className="feedback_card">
          {isFeedbackSelected ? this.renderThankYou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
