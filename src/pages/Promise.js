import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Promise.css'

const axios = require('axios')

const Promise = () => {
    const { state } = useSelector(state => ({
        state: state.electionsReducer
    }))
    const [ downElections, setdownElections ] = useState(
        []
    )

    const [ election, setElection ] = useState({
        // id: '',  
        sgId : '',
        // sgName: '',
        sgTypecode : ''
    })

    const handelElection = (e) => {
        // const { sgId, sgTypecode } = (JSON.parse(e.target.value))
        const downElections = (JSON.parse(e.target.value))
        setdownElections( 
            downElections
        )
    }

    const { sgId, sgTypecode } = election

    const handleDownElection = (e) => {        
        // console.log(sgId, sgTypecode)
        // console.log(election)
        const {sgId, sgTypecode} = JSON.parse(e.target.value)
        setElection({
            sgId,
            sgTypecode
        })
        // console.log(election)
    }
    const [ local, setLocal ] = useState([]);
    const [ candidates, setCandidates ] = useState([]);

    useEffect(() => {
        if(sgId === "" || sgTypecode === "") {
            return 
        } {
        axios.post('http://localhost:5000/promises/candidates',{
            sgId: election.sgId,
            sgTypecode: election.sgTypecode
       })
       .then(res => console.log(res))
        // .then(res => setCandidates(res.data))
     }
    }, [election] 
    ) 

    return (
        <div className="promise-container">
                    <select className="electionList" onChange={handelElection}>
                            <option>선거 선택</option>
                        {state.elections.map((election, index) => {
                            return <option
                             key={index} 
                             value={JSON.stringify(election.downElections)}
                            >{election.sgName}</option>
                        })}
                    </select>
                    <select onChange={handleDownElection}>
                            <option value="">하위 선거 선택</option>
                        {downElections.map((election, index) => {
                            return <option
                             key={index}
                             value={JSON.stringify(election)}
                             >
                                {election.sgName}
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