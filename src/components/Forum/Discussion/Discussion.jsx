import {useParams} from "react-router";

export default function Discussion() {

    const threadId = useParams();

    console.log(threadId)

    return (
        <>
        </>
    );
}