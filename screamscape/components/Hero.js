// import Image from 'next/image';
import { Card, Col, Row, Button, Link, Text, Container, useTheme } from "@nextui-org/react";
import styles from '../styles/Hero.module.css';


export default function Hero() {

    const { isDark } = useTheme();

    return (
        <Container>
            <Card css={{ w: "100%", h: "400px" }}>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                    src={ isDark ? "/assets/images/hangtime-darkmode.jpg" : "/assets/images/hangtime-lightmode.jpg"}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                    }}
                >
                    <Row>
                    <Col>
                        <Text color="#000" size={12}>
                        Amusement News and Rumors
                        </Text>
                        <Text color="#000" size={12}>
                        Latest Update: _________.
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                        <Link href="/thelatest">
                            <Button flat auto rounded color="secondary">
                                <Text
                                css={{ color: "inherit" }}
                                size={12}
                                weight="bold"
                                transform="uppercase"
                                >
                                The Latest
                                </Text>
                            </Button>
                        </Link>
                        </Row>
                    </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container>
    )
}