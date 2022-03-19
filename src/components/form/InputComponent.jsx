import "./InputComponent.min.css";

const InputComponent = (props) => {

    const {
        type,
        label,
        value,
        name,
        id,
        onChange
    } = props;

    return (
        <div className="input_container">
            <label
                htmlFor={id}>
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default InputComponent;