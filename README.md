#React Modular Form
---
The purpose of this project is to create modular form components for use with React. These components are designed in a way that the onSubmit and onChange functions are declared within the parent scope and not coupled to the form and inputs for maximum portability.

## FormComponent
---
Accepts two props (children, onSubmit) and is initiated like such..

`
<FormComponent onSubmit={yourfunction}
</FormComponent>
`
