import { Component } from 'react'

export default class ShowResults extends Component {
  getWinner = () => {
    const { votes, emojis } = this.props;
    const voteValues = Object.values(votes);
    const maxVotes = Math.max(...voteValues);
    return emojis.filter(emoji => votes[emoji.id] === maxVotes);
  }

  render() {
    const {votes} = this.props;
    const winners = this.getWinner();

    if(!winners) {
        <p>No votes yet</p>
    }
    return (
      <div>
          <h3>Result of voting:</h3>
          {winners.map(winner => (
            <p key={winner.id}>
              Winner: {winner.code} with {votes[winner.id]} votes!
            </p>
          ))}
      </div>
    )
  }
}
