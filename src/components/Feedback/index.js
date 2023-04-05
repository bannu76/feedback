// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    emoji: true,
  }

  clickOnEmoji = () => {
    const {emoji} = this.state
    this.setState({emoji: !emoji})
    console.log(emoji)
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    console.log(resources)
    const {emoji} = this.state
    const emojicard = (
      <div className="emoji-card">
        <h1>How satisfied are you with our customer support performance</h1>
        <ul className="card-ul">
          {emojis.map(item => (
            <li key={item.id}>
              <img
                className="emoji-image"
                onClick={this.clickOnEmoji}
                src={item.imageUrl}
                alt="name"
              />
              <p className="emoji-para">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )

    const thankCard = (
      <div className="thank-card">
        <div>
          <img
            className="love-symbol"
            src={resources.loveEmojiUrl}
            alt="love emoji"
          />
        </div>

        <h1>Thank You</h1>
        <p>We will use your feedback to improve our customer support</p>
      </div>
    )

    return <div className="container">{emoji ? emojicard : thankCard}</div>
  }
}
export default Feedback
