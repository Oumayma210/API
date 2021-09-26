import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions/actions';

const Profile = ({match,history}) => {
    const dispatch=useDispatch();
    useEffect(() => dispatch (getPosts(match.params.id))
        
    , [match.params]);
    const posts = useSelector((state) => state.reducer.posts)
        return (
        <div>
            Profile {match.params.id}
            {posts.map(
                (
                    el,
                    i 
                ) => (
                    <h2>{el.title}</h2>
                )
            )}
            <button onClick={()=>history.goBack()}>return</button>
        </div>
    )
}

export default Profile
