
import { useState } from "react";
import InputComponent from "./components/form/InputComponent";
import FormComponent from "./components/form/FormComponent";
import ButtonComponent from "./components/form/ButtonComponent";

function App() {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    // Get the name of the field that caused event and the new value of this field
    const { name, value } = e.target;

    // Assign new value to the form state
    const updatedForm = {
      ...form,
      [name]: value
    };

    // Update state
    setForm(updatedForm);
  }

  const formSubmit = (e) => {

    // Prevent default behavior of form  
    e.preventDefault();

    // Do something when form is submitted... likely there will be a fetch or axios call here
    console.log(form);
  }

  return (
    <div className="App">

      <FormComponent onSubmit={formSubmit}>

        <InputComponent
          type="email"
          label="Email"
          name="email"
          id="email"
          required={false}
          value={form.email}
          onChange={handleInputChange} />

        <InputComponent
          type="password"
          label="Password"
          name="password"
          id="password"
          required={true}
          value={form.password}
          onChange={handleInputChange} />

        <ButtonComponent value="Submit"/>
      </FormComponent>

    </div>
  );
}

export default App;
