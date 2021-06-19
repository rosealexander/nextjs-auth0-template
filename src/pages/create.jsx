import Create from "../features/create/Create";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function CreatePage(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'navigation/setSelectedIndex', payload: 'create'})
    }, [])

    return (
        <Create/>
    )
});
