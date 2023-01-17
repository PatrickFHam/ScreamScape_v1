import { Container } from "@nextui-org/react";
import { Grid } from '@nextui-org/react';

function NewsStory ({props}) {

    return(
        <Container>
            <h2>{props.title}</h2>
            <h6>Story Posted At: {props.dateandtime}</h6>
        </Container>
    )
};

export default NewsStory;