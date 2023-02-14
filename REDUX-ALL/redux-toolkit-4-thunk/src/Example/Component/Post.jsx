import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../Reducers/PostReducer';

const Post = () => {
    const { entities } = useSelector(state => state.postReducer);
    const dispatch = useDispatch();
    console.log(entities);

    useEffect(() => {
        dispatch(getPost())
    }, [])

    return (
        <>
            <h1>Post Data</h1>
            {
                entities.map((item) =>
                    <div>
                        <h4>TITLE: {item.title}</h4>
                        <h4>BODY: {item.body}</h4>
                        <hr />
                    </div>
                )
            }
        </>
    )
}

export default Post;
