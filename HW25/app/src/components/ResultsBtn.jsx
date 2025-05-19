import { Component } from 'react'
import ShowResults from './ShowResults.jsx';
import './ResultsBtn.css';

export default class ResultsBtn extends Component {
  render() {
    const {
      onShowResults,
      showResults,
      votes,
      emojis,
      onClearResults,
    } = this.props;

    return (
      <div>
        <button type='button' onClick={onShowResults}>Show Results</button>
        <button type='button' onClick={onClearResults} className='clear-btn'>Clear Results</button>

        {showResults && <ShowResults emojis={emojis} votes={votes} />}
      </div>
    )
  }
}