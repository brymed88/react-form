import "./InputComponent.min.css";

const InputComponent = (props) => {

    const {
        type,
        label,
        value,
        name,
        id,
        required,
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
                id={id}
                value={value}
                required={required}
                onChange={onChange}
            />
        </div>
    )
}
export default InputComponent;