import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostList