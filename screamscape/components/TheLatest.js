import { Container } from "@nextui-org/react";
import { Grid } from '@nextui-org/react';
import NewsCard from '../components/NewsCard';

function TheLatest ({props}) {

    return(
        <Container>
            <h2>The Latest in Amusement News</h2>
            <h6>These are grouped by post-date, up to ten post-dates.</h6>
            <Grid.Container gap={2} justify="center">
                {props.map((newsItem) => (
                    <Grid xs={12} sm={4}>
                        <NewsCard id={newsItem._id} props={newsItem} />
                    </Grid>
                ))}
            </Grid.Container>
        </Container>
    )
};

export default TheLatest;