import { Container } from "@nextui-org/react";

function TheLatest ({props}) {

    return(
        <Container>
            <h2>The Latest will go here.</h2>
            <ul>
            {props.map((newsItem) => (
                <li key={newsItem._id}>
                    <h2>{newsItem.title}</h2>
                    <h3>{newsItem.body}</h3>
                    <p>{newsItem.dateandtime}</p>
                </li>
            ))}
            </ul>
        </Container>
    )
};

export default TheLatest;