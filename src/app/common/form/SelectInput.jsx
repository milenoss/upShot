import React from 'react'
import {Form, Label, Select} from 'semantic-ui-react'



const SelectInput = ({input, type, placeholder, multiple, options, meta: {touched, error}}) => {
    return (
        //override redux forms default props values onchange needs to be edited and value.
    <Form.Field  error={touched && !!error }>
         <Select
         value={input.value || null}
         onChange={(e, data) => input.onChange(data.value)}
         placeholder = {placeholder}
         options = {options}
         multiple = {multiple}
            />
        {touched && error &&  <Label basic color='red'>{error}</Label>}
          </Form.Field>
        
    )
}

export default SelectInput;