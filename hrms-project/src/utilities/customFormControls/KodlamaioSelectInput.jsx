import { useField } from 'formik';
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function KodlamaioSelectInput({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
       <FormField>
 <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
      <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    
       </FormField>

    )
}
