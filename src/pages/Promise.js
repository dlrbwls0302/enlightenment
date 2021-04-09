import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../store/Store';

const axios = require('axios')

const Promise = () => {
    const { state } = useSelector(state => ({
        state: state.electionsReducer
    }))
    const [ election, setElection ] = useState({
        sgId: '',
        sgTypecode: ''
    })    

    const handelElection = (e) => {
        // console.log(store.getState())
        const { sgId, sgTypecode } = (JSON.parse(e.target.value))
        console.log(sgId, sgTypecode)
        setElection({
            ...election,
            sgId,
            sgTypecode
        })
        // console.log(election)
        // console.log(e.target.sgTypecode)
    }

    useEffect(() => {
        console.log(election)
    }, [election])

    return (
        <div className="promise">
                    <select className="electionList" placeholder={'안녕하세요'} onChange={handelElection}>
                            <option value="">선거 선택</option>
                        {state.elections.map((election, index) => {
                            return <option
                             key={index} 
                             value={JSON.stringify({sgId:election.sgId['_text'], sgTypecode:election.sgTypecode['_text']})}
                            >{election.sgName['_text']}</option>
                        })}
                    </select>
                    <select placeholder={'시군 선택'}>
                            <option value="">지역 선택</option>
                        {state.elections.map((election, index) => {
                            return <option key={index} value={election.sgId['_text']}>{election.sgName['_text']}</option>
                        })}
                    </select>
                    </div>
    );
};

export default Promise;