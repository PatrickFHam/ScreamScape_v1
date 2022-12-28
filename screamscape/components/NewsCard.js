import { Card, Text, Col } from '@nextui-org/react';

function NewsCard ({props}) {
    return (
        <Card>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                {props._id}
                </Text>
                <Text h4 color="white" css={{backgroundColor: "black"}}>
                {props.title}
                </Text>
            </Col>
            </Card.Header>
            <Card.Image
            src={props.thumbnailImage}
            objectFit="cover"
            width="100%"
            height={240}
            alt="Card image background"
            />
        </Card>
    )
}

export default NewsCard;