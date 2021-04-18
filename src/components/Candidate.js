import React, {useState, useEffect} from 'react';
import data from '../CandidateInfo.json'

import "../styles/Candidate.css"

const Candidate = ({candidate}) => {
    const { jdName, name } = candidate
    const [ currentCandidate, setCurrentCandidate ] = useState({
        name: '',
        img : '',
        promise : ''
    })
    
    useEffect(() => {
        const hudo = data.data.filter((candidate, index) => {
            return candidate.name === name
        })
        const temp = hudo[0]
        if (temp) {
            setCurrentCandidate({
                name: temp.name,
                img: temp.img,
                promise: temp.promise
            })
        }

    }, [])

    return (
        
        <>
            {currentCandidate.name === '' ? "" :
            <img className="candidate_img" src={currentCandidate.img} alt={currentCandidate.name}/>}
        </>
    
    );
};

export default Candidate;   