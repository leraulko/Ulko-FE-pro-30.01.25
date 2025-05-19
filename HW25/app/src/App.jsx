import './App.css'
import { Component } from 'react'
import EmojiList from './components/EmojiList.jsx';
import ResultsBtn from './components/ResultsBtn.jsx';

const emojis = [
  {id: 1, code: '\u{1F469}\u{200D}\u{1F4BB}'},
  {id: 2, code: '\u{1F938}'},
  {id: 3, code: '\u{1F9D8}'},
  {id: 4, code: '\u{1F340}'},
  {id: 5, code: '\u{1F3CE}'},
];

const STORAGE_KEY = 'emojiVotes';

function showInitialVotes() {
  const votes = {};
  emojis.forEach((emoji) => {
    votes[emoji.id] = 0;
  });
  return votes;
}

export default class App extends Component {
  state = {
    votes: showInitialVotes(),
    showResults: false,
  }

  handleVote = (id) => {
    this.setState(prevState => ({
      votes: {
        ...prevState.votes,
        [id]: prevState.votes[id] + 1,
      },
    }));
  }

  componentDidMount() {
    const savedVotes = localStorage.getItem(STORAGE_KEY);
    if (savedVotes) {
      this.setState({votes: JSON.parse(savedVotes)});
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.votes));
    }
  }

  handleShowResults = () => {
    this.setState({showResults: true});
  }

  handleClearResults = () => {
    localStorage.removeItem(STORAGE_KEY);
    this.setState({votes: showInitialVotes(), showResults: false});
  }

  render() {
    const {votes, showResults} = this.state;
    return (
      <>
      <EmojiList emojis={emojis} votes={votes} onVote={this.handleVote} />
      <ResultsBtn
        emojis={emojis}
        votes={votes}
        showResults={showResults}
        onShowResults={this.handleShowResults}
        onClearResults={this.handleClearResults}
      />
    </>
    )
  }
}