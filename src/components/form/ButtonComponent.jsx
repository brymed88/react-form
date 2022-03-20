
import "./ButtonComponent.min.css";
const ButtonComponent = (props) => {
    const { value } = props;
    return (
        <div className="button_container">
            <button>{value}</button>
        </div>
    )
}
export default ButtonComponent;