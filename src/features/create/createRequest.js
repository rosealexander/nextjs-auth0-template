import axios from "../../../lib/axios";

export const createRequest = async (title, content, name, user_id) => {
    try {
        const data = {title, content, name, user_id}
        await axios({
            method: 'post',
            url: '/api/post',
            data: data,
        })
    } catch (error) {
        console.error(error)
    }
}
