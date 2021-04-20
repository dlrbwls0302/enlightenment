import React, {useState, useEffect} from 'react';
import data from '../CandidateInfo.json'

import "../styles/Candidate.css"
import PromiseModal from '../modals/PromiseModal'

const Candidate = ({candidate}) => {
    const { jdName, name } = candidate
    const [ currentCandidate, setCurrentCandidate ] = useState({
        personalInfo: "",
        name: '',
        img : '',
        promise : ''
    })
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const hudo = data.data.filter((candi, index) => {
            return candi.name === name
        })
        const temp = hudo[0]
        if (temp) {
            setCurrentCandidate({
                candidateInfo: candidate,
                name: temp.name,
                img: temp.img,
                promise: temp.promise
            })
        }

    }, [])


    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        
        <>
            {currentCandidate.name === '' ? "" :
            <>
              <img className="candidate_img" src={currentCandidate.img} alt={currentCandidate.name} onClick={openModal}/>
              <PromiseModal
                showModal={showModal} setShowModal={openModal} currentCandidate={currentCandidate}/>
            </>
            }
        </>
    
    );
};

export default Candidate;   