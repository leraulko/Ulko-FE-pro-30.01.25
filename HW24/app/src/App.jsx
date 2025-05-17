import { useState } from 'react'
import './App.css'
import VoteList from './VoteList.jsx';
import Results from './Results.jsx';

function App() {
  const contestants = [
    { id: 1, name: 'Black Widow' },
    { id: 2, name: 'Peter Parker' },
    { id: 3, name: 'Dr. Strange' },
    { id: 4, name: 'Gamora' },
    { id: 5, name: 'Groot' },
  ];

  const [vote, setVote] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const handleVote = (id) => {
    setVote((prevVotes) => ({
      ...prevVotes,
      [id]: prevVotes[id] + 1
    }));
  };

  return (
    <>
      <h1>Vote for your fav character</h1>
      <VoteList contestants={contestants} handleVote={handleVote} />
      <Results vote={vote} contestants={contestants} />
    </>
  )
}

export default App
