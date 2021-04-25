import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import '../styles/Write.css'

const Write = ({ handleTogleMagazine, handleTogleHotMagazine }) => {
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    }
    const submitEditor = () => {
        if (title === '' || description === '') {
            alert('제목과 내용을 입력해 주세요.');
        } else {
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
                .then(json => {
                    history.push(`/xfile/${json.id}`);
                    handleTogleMagazine(json.id, json.userId, json.title, json.description, json.like, json.createdAt);
                })
        }
    }
    return (
        <div className='write-container'>
            <div className='editor'>
                <RiArrowGoBackFill className="write-back" onClick={() => { handleTogleHotMagazine() }} />
                <h1 className='write-heading'>WRITE MAGAZINE</h1>
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
                            uploadUrl: 'http://localhost:5000/magazines/images'
                        }
                    }}
                />
                <button className='write-submit' onClick={submitEditor}>POST</button>
            </div>
        </div>
    );
};

export default Write;