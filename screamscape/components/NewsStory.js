import { Container, Spacer } from "@nextui-org/react";
import { Grid } from '@nextui-org/react';

function NewsStory ({props}) {

    return(
        <Container>
            <h2>{props.title}</h2>
            <h6>Story Posted At: {props.postDate}</h6>
            <p>{props.body}</p>
            {props.socialMedia.youtube.length != 0 ? <h6>There IS a YouTube Link, and it's {props.socialMedia.youtube[0]}.</h6> : <h6>There is NOT a YouTube link.</h6>}
            {props.socialMedia.youtube.length != 0 ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.socialMedia.youtube[0]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : null}
            {props.socialMedia.twitter.length != 0 ? <><blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Get ready to cheers! 🍻👀 <a href="https://t.co/p455O3FToM">pic.twitter.com/p455O3FToM</a></p>&mdash; Busch Gardens Tampa Bay (@BuschGardens) <a href="https://twitter.com/BuschGardens/status/1607820732263813122?ref_src=twsrc%5Etfw">December 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>: null}
            {props.socialMedia.twitter.length != 0 ? `${props.socialMedia.twitter}` : null}
            <Spacer />
            <Spacer />
        </Container>
    )
};

export default NewsStory;