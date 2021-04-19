import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Promise.css'

const axios = require('axios')

const Promise = () => {
    const { state } = useSelector(state => ({
        state: state.electionsReducer
    }))
    const [ downElections, setdownElections ] = useState([])   // 하위선거 state 

    const [ election, setElection ] = useState({
        sgId : '',
        sgTypecode : '',
        sdName : '',
        sggName : ''
    })
    const [ electionPlace, setElectionPlace ] = useState([]);
    const [ candidates, setCandidates ] = useState([]);
    const { sgId, sgTypecode, sdName, sggName } = election

    const handelElection = (e) => {
        const downElections = (JSON.parse(e.target.value))
        setdownElections( 
            downElections
        )
    } // 상위선거 값 변경 시 하위 선거 state 변경
    const handleCandidateLocation = (e) => {
        const {sdName, sggName} = JSON.parse(e.target.value)
        setElection({
            ...election,
            sdName,
            sggName
        })
    }
    const handleDownElection = (e) => {        
        const {sgId, sgTypecode} = JSON.parse(e.target.value)
        setElection({
            ...election,
            sgId,
            sgTypecode
        })
        axios.post('http://localhost:5000/promises/electionplaces', {
            sgId,
            sgTypecode
            }
          )
          .then(res => { 
             setElectionPlace(res.data)
          })
    }

    useEffect(() => {
        if(sgId === "" || sgTypecode === "" || sdName === '' || sggName === '') {
            return 
        }
        console.log(election)
        axios.post('http://localhost:5000/promises/candidates',{
            sgId,
            sgTypecode,
            sggName,
            sdName     
        })
        .then(res => console.log(res))
    },[election] 
    )  

    return (
        <div className="promise-container">
                    <select className="electionList" onClick={handelElection} value="asf">
                     <option value="" selected disabled hidden >선택해주세요.</option>
                        {state.elections.map((election, index) => {
                            if (election.sgId === '20210407') {
                                return <option 
                                key={index}
                                value={JSON.stringify(election.downElections)}
                                >{election.sgName}</option>
                            }
                            return <option disabled
                            key={index}
                            value={JSON.stringify(election.downElections)}
                            >{election.sgName}</option>
                        })}
                    </select>
                    <select onChange={handleDownElection}>
                            <option value="" selected disabled hidden>하위 선거 선택</option>
                        {downElections.map((election, index) => {
                            if (election.sgTypecode === '3') {
                                return <option
                                key={index}
                                value={JSON.stringify(election)}
                                >
                                   {election.sgName}
                               </option>
                            }
                            return <option disabled
                             key={index}
                             value={JSON.stringify(election)}
                             >
                                {election.sgName}
                            </option>
                        })}
                    </select>
                    <select onClick={handleCandidateLocation}>
                      <option value="">선거 장소</option>
                        {electionPlace.map((place, index) => {
                            return <option
                             key={index}
                             value={JSON.stringify(place)}
                             >
                                {place.sdName+"/"+place.sggName}
                      </option>
                        })}
                    </select>
                    <div>
                        {
                        candidates.map((candidate, index) => {
                             return <div> {candidate.name} </div>
                        })
                    }
                    </div>
                    </div>
    );
};

export default Promise;