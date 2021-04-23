import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
import '../styles/Write.css'

const Write = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    }
    const ec2Url = 'http://ec2-3-34-52-239.ap-northeast-2.compute.amazonaws.com:5000';
    const submitEditor = () => {
        if (title === '' || description === '') {
            alert('제목과 내용을 입력해 주세요.');
        } else {
            fetch(`${ec2Url}/magazine`, {
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
                <h1 className='write-heading'>Simply Write a post.</h1>
                <div className='write-wrapper'>
                    <div className='write-input-data'>
                        <input type="text" className='title' autoComplete='off' onChange={handleTitle} required></input>
                        <div className='write-underline'></div>
                        <label>Title</label>
                    </div>
                </div>
                
                <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log(editor.getData())
                        setDescription(data)
                    }}
                    onBlur={(event, editor) => {
                        // console.log( 'Blur.', editor );
                    }}
                    onFocus={(event, editor) => {
                        // console.log( 'Focus.', editor );
                    }}
                    config={{
                        ckfinder: {
                            uploadUrl: `${ec2Url}/magazines/images`
                        }
                    }}
                />
                <button className='submit' onClick={submitEditor}>POST!</button>
            </div>
        </div>
    );
};

export default Write;