import './Tag.css'
const Tag = (props: { name: string }) => {
    return (
        <>
            <button className="tag" value="button">{props.name}</button>
        </>
    )
}

export default Tag;