import axios from "axios";
import { Dispatch } from "react"
import { Post, PostAction, PostActionTypes } from "../../types/post"

export const fetchPosts = () => {
    return async(dispatch: Dispatch<PostAction>) => {
        try{
            dispatch({type: PostActionTypes.FETCH_POSTS});
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
            dispatch({type: PostActionTypes.FETCH_POSTS_SUCCES, payload: response.data})
        }catch(e){
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла какая-та ошибка'
            })
        }
    }
}
