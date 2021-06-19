import {Grid, Hidden, Typography} from "@material-ui/core";
import PostPreview from "../post/PostPreview";
import {useSelector} from "react-redux";
import hash from 'object-hash';

const Drafts = () => {
    const drafts = useSelector((state) => state.drafts.drafts)

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
                        Drafts
                    </Typography>
                </Grid>
            </Hidden>

            {drafts && drafts.map(post => (
                    <Grid item
                          key={hash(post)}
                    >
                        <PostPreview post={post}/>
                    </Grid>
                ))
            }
        </Grid>
    )
};

export default Drafts
