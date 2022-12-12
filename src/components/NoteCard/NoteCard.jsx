export default function({ note, idx }) {
    return (
        <>
            <div key={idx}>{note.content}</div>
        </>
    )
}