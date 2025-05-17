export default function VoteList({contestants, handleVote}) {
    return (
        <ul>
            {contestants.map(contestant => (
                <li key={contestant.id}>
                     <h3>{contestant.name}</h3>
                    <button onClick={() => handleVote(contestant.id)}>Vote</button>
                </li>
            ))}
        </ul>
    )
}