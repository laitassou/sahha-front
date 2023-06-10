import React, { useState, useEffect, useContext, FC } from 'react';
import AuthContext from '../context/AuthContext';

import MAIN_URL from 'utils/constants';


interface params {
    slot_id: number;
    intervenant_id: number;
}

const FeedbackComponent: FC<params> = ({ slot_id, intervenant_id }) => {
    const [feedback, setFeedback] = useState<string>('');
    const [score, setScore] = useState<number>(5);

    const { post_feedback } = useContext(AuthContext);

    const auth = localStorage.getItem('authTokens') as string;
    const auth_json = JSON.parse(auth);
    const json_auth_token = auth_json.token;

    const handleInputChange = (e: any) => {
        setFeedback(e.target.value);
    };

    const handleScoreChange = (e: any) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1 && value <= 10) {
            setScore(value);
        }
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (feedback) {
            console.log('Feedback:', feedback);
            console.log('Score:', score);
            setFeedback(feedback);
            setScore(score);
            post_feedback(slot_id, intervenant_id, feedback, score);

        }
    };


    return (
        <div className="w-full max-w-1xl pb-8 ">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={handleInputChange}
                    className="w-full bg-white rounded p-2 shadow-sm border border-gray-300 mb-4"
                    placeholder="Saisissez votre feedback..."
                    rows={4}
                />
                <input
                    type="range"
                    min={1}
                    max={10}
                    value={score}
                    onChange={handleScoreChange}
                    className="w-full mb-4"
                />
                <div className="flex justify-between">
                    <span>1</span>
                    <span>score</span>
                    <span>10</span>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
};

export default FeedbackComponent;