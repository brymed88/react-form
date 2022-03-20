# React Modular Form
The purpose of this project is to create modular form components for use with React. These components are designed in a way that the onSubmit and onChange functions are declared within the parent scope and not coupled to the form and inputs for maximum portability.

## FormComponent
Accepts two props (children, onSubmit)

`
<FormComponent onSubmit={yourfunction}>
//children will go here
</FormComponent>
`

## InputComponent
Accepts seven props (type,label,value,name,id,required,onChange), but none are required.

`
<InputComponent
          type="email"
          label="Email"
          name="email"
          id="email"
          required={true}
          value={form.email}
          onChange={handleInputChange} />
`

In the above example we are passing a state value form.email in as a prop for the Input Component. The onChange function (handleInputChange) updates the state value form.email with the user entered input value.

## ButtonComponent
Accepts one prop (value) that will change the text within the button. Additional props could be added for className to change css classes based on prop values.

`
<ButtonComponent value="Submit"/>
`

## All together

```
    <FormComponent onSubmit={formSubmit}>
    <InputComponent
          type="email"
          label="Email"
          name="email"
          id="email"
          required={true}
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
```    

## Full Page example including functions and state

```
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
    e.preventDefault();
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
```