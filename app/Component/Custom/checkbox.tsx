
import "./styledCustom.scss"

const CheckboxCustom = ({ checked, setChecked, onChange }: { checked: boolean, setChecked: (checked: boolean) => void, onChange: () => void }) => {

    return (
        <div className="checkbox-wrapper-26">
            <input type="checkbox" id="_checkbox-26" onChange={() => setChecked(!checked)} checked={checked} />
            <label htmlFor="_checkbox-26" onClick={onChange}>
                <div className="tick_mark"></div>
            </label>
        </div>)
}

export default CheckboxCustom