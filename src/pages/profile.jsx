import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Profile from "../features/profile/profile";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function ProfilePage(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'navigation/clearSelectedIndex'})
    }, [])

    return (
        <Profile/>
    )
})
