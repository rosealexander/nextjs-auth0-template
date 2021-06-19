import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Blog from "../features/blog/Blog";
import axios from "../../lib/axios";

const HomePage = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'blog/setFeed', payload: props.feed})
    }, [props])

    useEffect(() => {
        dispatch({type: 'navigation/setSelectedIndex', payload: 'blog'})
    }, [])

    return (
        <Blog/>
    )
}

export const getServerSideProps = async () => {
    const res = await axios.get('/api/feed')
    const feed = await res.data
    return {
        props: {feed},
    }
}

export default HomePage
