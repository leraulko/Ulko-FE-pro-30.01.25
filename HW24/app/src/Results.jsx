export default function Results({vote, contestants}) {
    const totalVotes = Object.values(vote).reduce((sum, count) => sum + count);

    if (totalVotes === 0) {
        return <p> No votes yet </p>
    }
    return (
        <ul>
            {contestants.map(contestant => (
                <li key={contestant.id}>
                    Votes result: {vote[contestant.id]}
                </li>
                ))}
        </ul>
    )
}