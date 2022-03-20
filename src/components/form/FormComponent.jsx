import "./FormComponent.min.css";

const FormComponent = (props) => {
    const { children, onSubmit} = props;

    return (
        <div className="form_container">
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}
export default FormComponent;