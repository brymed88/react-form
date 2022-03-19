import "./FormComponent.min.css";

const FormComponent = (props) => {
    const { children} = props;

    return (
        <div className="form_container">
            <form>
                {children}
            </form>
        </div>
    )
}
export default FormComponent;