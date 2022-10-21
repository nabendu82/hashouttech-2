import React from 'react'
import styled from 'styled-components';
import './PostItem.css'

const h1Styled = {
    color: 'darkmagenta',
    backgroundColor: 'lightgreen',
    padding: '5px'
}

const ParaWrapper = styled.p`
    padding: 2em;
    background: lightskyblue;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <h3 style={{ color: 'darkblue', backgroundColor: 'lightgray' }}>
                Title: {post.title}
            </h3>
            <ParaWrapper>{post.body}</ParaWrapper>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem