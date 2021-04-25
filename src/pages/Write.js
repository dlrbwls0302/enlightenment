import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
import '../styles/Write.css'

const Write = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const ec2Url = 'https://server.kelection.ml';
    const submitEditor = () => {
        if (title === '' || description === '') {
            alert('제목과 내용을 입력해 주세요.');
        } else {
            fetch(`${ec2Url}/magazines`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    description
                })
            })
                .then(res => res.json())
                .then(json => console.log(json))
        }
    }
    return (
        <div className='write-container'>
            <div className='editor'>
                <Link to={'/xfile'} className='goBack'>
                    글목록 보기                 
                </Link>
                <div className='line' />
                <h1 className='write-heading'>사건 파일 작성</h1>
                <input type="text" className='title' autoComplete='off' placeholder="글의 제목을 입력해 주세요." onChange={handleTitle}></input>
                <div className='editor-container'></div>
                <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {

                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data)
                    } }
                    onBlur={ ( event, editor ) => {
                        
                    } }
                    onFocus={ ( event, editor ) => {
                        
                    } }
                    config={{
                    ckfinder: {
                        uploadUrl: `${ec2Url}/magazines/images`
                    }
                    }}
                />
                <button className='submit' onClick={submitEditor}>사건 등록</button>
            </div>
        </div>
    );
};

export default Write;