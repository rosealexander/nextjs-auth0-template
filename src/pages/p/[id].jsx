import Post from "../../features/post/Post";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import axios from "../../../lib/axios";

const PostControl = props => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'post/setData', payload: props})
    }, [props])

    useEffect(() => {
        dispatch({type: 'navigation/clearSelectedIndex'})
    }, [])

    return (
        <Post/>
    )
}

export const getServerSideProps = async (context) => {
    // const session = await getSession(req, res);
    // const result = await axios({
    //     method: 'post',
    //     url: `/api/post/${context.params.id}`,
    //     data: {user_id: session.user.sub},
    // })

    const res = await axios.get(`/api/post/${context.params.id}`)
    const data = await res.data
    return {props: {...data}}
}

export default PostControl
