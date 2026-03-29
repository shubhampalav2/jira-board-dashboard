import type { styleType } from '../../../todoInterfaces'
import './Tag.css'
const Tag = (props: { name: string, isTag?: boolean }) => {
    const stylesMap: styleType = {
        "DEV": { backgroundColor: "#04caff" },
        "QA": { backgroundColor: "#ff2e04" },
        "Product Owner": { backgroundColor: "#04ff2a" }
    }
    return (
        <>
            <button className={`tag ${props?.isTag ? 'tag-selected' : ''}`} type="button"
                style={props?.isTag ? stylesMap[props.name] : {}}>{props.name}</button>
        </>
    )
}

export default Tag;
