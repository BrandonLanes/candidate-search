import type { Candidate } from '../interfaces/Candidate.interface';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

type CandidateCardProps = {
    currentUser: Candidate;
    makeDecision: (isSelected: boolean) => void;
}

const CandidateCard = ({
    currentUser, 
    makeDecision
}: CandidateCardProps) => {
    return (
        <>
            {currentUser?.name ? (
                <section className='candidateCard'>
                    <figure>
                        <img src={`${currentUser.avatar}`} alt={`${currentUser.username}`} />
                    </figure>
                    <article className='details'>
                        <h2>{currentUser.name}</h2>
                        <p>
                            <strong>Username</strong> {currentUser.username}
                        </p>
                        <p>
                            <strong>Location</strong> {currentUser.location}
                        </p>
                        <p>
                            <strong>Email</strong> {currentUser.email}
                        </p>
                        <p>
                            <strong>{currentUser.html_url}</strong>
                        </p>
                        <p>
                            <strong>Company</strong> {currentUser.company}
                        </p>
                    </article>
                </section>
            ) : (
                <h1 style={{ margin: '16px 0' }}>Please select a candidate.</h1>
            )}
        </>
    );
};

export default CandidateCard;
