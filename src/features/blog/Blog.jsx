import PostPreview from '../post/PostPreview'
import {Grid, Hidden, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

const Blog = () => {
    const feed = useSelector((state) => state.blog.feed)

    return (
        <Grid container
              direction='column'
              spacing={3}
        >
            <Hidden smUp>
                <Grid item>
                    <Typography variant='h3'
                                color='primary'
                    >
                        Blog
                    </Typography>
                </Grid>
            </Hidden>
            {feed.map(post => (
                <Grid item key={post.id}>
                    <PostPreview post={post}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Blog
