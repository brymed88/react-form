
import { useState } from "react";
import InputComponent from "./components/form/InputComponent";
import FormComponent from "./components/form/FormComponent";

function App() {

  const [form, setForm] = useState({
    email:'',
    password:''
  });

  const handleFormChange = (e) => {
    // Get the name of the field that caused event
    // Get the new value of this field
    const { name, value } = e.target;

    // Assign new value to the form field
    const updatedForm = {
      ...form,
      [name]: value
    };

    console.log('Form changed: ', updatedForm);

    // Update state
    setForm(updatedForm);
  }

  return (
    <div className="App">
      <FormComponent>

        <InputComponent
          label="Email"
          name="email"
          value={form.email}
          onChange={handleFormChange} />

        <InputComponent
          label="Password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleFormChange} />
      </FormComponent>

    </div>
  );
}

export default App;
