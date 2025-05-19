import { Component } from 'react';
import './EmojiList.css';

export default class EmojiList extends Component {
  render() {
    const {emojis, votes, onVote} = this.props;
    return (
      <div>
          <h1>Click emoji you like the most</h1>
          <ul>
            {emojis.map(emoji => (
                <li key={emoji.id}>
                    <button type='button' onClick={() => onVote(emoji.id)} className='emoji-btn'>{emoji.code}</button>
                    <p> {votes[emoji.id]} </p>
                </li>
            ))}
          </ul>
      </div>
    )
  }
}
