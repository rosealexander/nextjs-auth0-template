import axios from "../../../lib/axios";

export async function publishPost(id) {
    await axios({
        method: 'put',
        url: `/api/publish/${id}`,
    });
}

export async function destroyPost(id) {
    await axios({
        method: 'delete',
        url: `/api/delete/${id}`,
    });
}
