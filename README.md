# React Modular Form
The purpose of this project is to create modular form components for use with React. These components are designed in a way that the onSubmit and onChange functions are declared within the parent scope and not coupled to the form and inputs for maximum portability.

## FormComponent
Accepts two props (children, onSubmit) and is initiated like such..

`
<FormComponent onSubmit={yourfunction}>
//children will go here
</FormComponent>
`

## InputComponent
Accepts seven props (type,label,value,name,id,required,onChange) and is initiated like such..

`
<InputComponent
          type="email"
          label="Email"
          name="email"
          id="email"
          required={true}
          value={form.email}
          onChange={handleFormChange} />
`

In the above example we are passing a state value form.email in as a prop for the Input Component. The onChange function (handleFormChange) updates the state value form.email with the user entered input value.

## ButtonComponent
Accepts one props (value) that will change the text within the button.

`
<ButtonComponent value="Submit"/>
`

## All together
`
<FormComponent onSubmit={formSubmit}>

        <InputComponent
          type="email"
          label="Email"
          name="email"
          id="email"
          required={true}
          value={form.email}
          onChange={handleFormChange} />

        <InputComponent
          type="password"
          label="Password"
          name="password"
          id="password"
          required={true}
          value={form.password}
          onChange={handleFormChange} />

        <ButtonComponent value="Submit"/>
      </FormComponent>

`