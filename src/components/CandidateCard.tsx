// import { FcMakeDecision } from 'react-icons/fc';
import type { Candidate } from '../interfaces/Candidate.interface';
// import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

type CandidateCardProps = {
    currentCandidate: Candidate;
    makeDecision: () => void;
    denyDecision: () => void;
}

const CandidateCard = ({
    currentCandidate, 
    makeDecision,
    denyDecision,
}: CandidateCardProps) => {
    console.log(currentCandidate)
    return (
        <>
            {currentCandidate?.id ? (
                <section className='candidateCard'>
                    <figure>
                        <img src={`${currentCandidate.avatar}`} alt={`${currentCandidate.username}`} />
                    </figure>
                    <article className='details'>
                        <h2>{currentCandidate.name}</h2>
                        <p>
                            <strong>Username</strong> {currentCandidate.username}
                        </p>
                        <p>
                            <strong>Location</strong> {currentCandidate.location}
                        </p>
                        <p>
                            <strong>Email</strong> {currentCandidate.email}
                        </p>
                        <p>
                            <strong>{currentCandidate.html_url}</strong>
                        </p>
                        <p>
                            <strong>Company</strong> {currentCandidate.company}
                        </p>
                    </article>
                    <button onClick={makeDecision}>+</button>
                    <button onClick={denyDecision}>-</button>
                </section>
            ) : (
                <h1 style={{ margin: '16px 0' }}>Please select a candidate!</h1>
            )}
        </>
    );
};

export default CandidateCard;
