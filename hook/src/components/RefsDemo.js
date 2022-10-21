import React, { useEffect, useRef } from 'react'

const RefsDemo = () => {
    const nameRef = useRef();
    const commentRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(commentRef.current.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username </label>
                <input type="text" id="username" ref={nameRef} />
            </div>
            <br />
            <div>
                <label htmlFor="comment">Comments </label>
                <textarea id="comment" ref={commentRef}></textarea>
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default RefsDemo