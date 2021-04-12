import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Promise.css'

const axios = require('axios')

const Promise = () => {
    const { state } = useSelector(state => ({
        state: state.electionsReducer
    }))
    const [ downElections, setdownElections ] = useState(
        // sgId: '',
        // sgTypecode: '',
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
    useEffect(() => {
        if(sgId == "" || sgTypecode == "") {
            console.log(state)
            return 
        } {
        axios.post('http://localhost:5000/promises/candidates',{
            sgId: election.sgId,
            sgTypecode: election.sgTypecode
    })
        .then(res => console.log(res))
        console.log(election) }
    }, [election] 
    ) 

    return (
        <div className="promise-container">
                    <select className="electionList" placeholder={'안녕하세요'} onChange={handelElection}>
                            <option>선거 선택</option>
                        {state.elections.map((election, index) => {
                            return <option
                             key={index} 
                             value={JSON.stringify(election.downElections)}
                            >{election.sgName}</option>
                        })}
                    </select>
                    <select placeholder={'시군 선택'} onChange={handleDownElection}>
                            <option value="">지역 선택</option>
                        {downElections.map((election, index) => {
                            return <option
                             key={index}
                             value={JSON.stringify(election)}
                             >
                                {election.sgName}
                            </option>
                        })}
                    </select>
                    </div>
    );
};

export default Promise;