interface GrettingProps {
    firstName: string,
    lastName: string,
}

export default function Greeting({ firstName, lastName }: ) {
    return (
        <p>Wecome {firstName} {lastName}.</p>
    )
}