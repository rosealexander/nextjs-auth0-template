import Router from 'next/router'
import {Box, Button, Paper, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";

const PostPreview = ({post}) => {
    const dispatch = useDispatch()
    const authorName = post.author ? post.author.name : 'Unknown author'
    return (
        <Paper>
            <Button fullWidth
                    style={{justifyContent: "flex-start"}}
                    onClick={() => {
                        dispatch({type: 'navigation/clearSelectedIndex'})
                        return Router.push('/p/[id]', `/p/${post.id}`)
                    }}
            >
                <Box p={2} textAlign='left'>
                    <Typography variant='body1'>
                        {post.title}
                    </Typography>
                    <Typography variant='subtitle2'>
                        By {authorName}
                    </Typography>
                </Box>
            </Button>
        </Paper>
    )
}

export default PostPreview
