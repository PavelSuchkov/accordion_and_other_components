import {SelectPropsType} from "./Select";


export const CustomSelect = (props: SelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <div>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}