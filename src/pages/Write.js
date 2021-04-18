import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../styles/Write.css'

const Write = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const submitEditor = () => {
        fetch("http://localhost:5000/magazines", {
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
    return (
        <div className="App">
          <div id='editor'>
            <input type="text" placeholder="제목" onChange={handleTitle}></input>
            <CKEditor
                editor={ ClassicEditor }
                data=""
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    // console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setDescription(data)
                } }
                onBlur={ ( event, editor ) => {
                    // console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    // console.log( 'Focus.', editor );
                } }
                config={{
                  ckfinder: {
                    uploadUrl: 'http://localhost:5000/magazines/images'
                  }
                }}
            />
            <button onClick={submitEditor}>제출</button>
          </div>
        </div>
    );
};

export default Write;