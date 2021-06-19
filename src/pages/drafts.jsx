import Drafts from "../features/drafts/Drafts";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import axios from "../../lib/axios";
import {getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function DraftsPage(props){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'drafts/setDrafts', payload: props.drafts})
    }, [props])

    useEffect(() => {
        dispatch({type: 'navigation/setSelectedIndex', payload: 'drafts'})
    }, [])

    return (
        <Drafts/>
    )
});

export const getServerSideProps = async ({ req, res }) => {
    const session = await getSession(req, res);

    if (session) {
        const result = await axios({
            method: 'post',
            url: '/api/drafts',
            data: {user_id: session.user.sub},
        })

        const drafts = await result.data
        return {
            props: {drafts},
        }
    }
    return {props: {}}
}
