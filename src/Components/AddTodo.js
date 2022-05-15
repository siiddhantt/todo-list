import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {
    const [job, setJob] = useState('');
    const [desc, setDesc] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if (!job || !desc) {
            alert("Title or Descrption is missing!")
        }
        else {props.addTodo(job,desc);}
        setJob("");
        setDesc("");
    }
    return (
        <div className='container my-3'>
            <h3> Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="job" className="form-label">Title</label>
                    <input type="text" value={job} onChange={(e) => { setJob(e.target.value) }} className="form-control" id="job" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
