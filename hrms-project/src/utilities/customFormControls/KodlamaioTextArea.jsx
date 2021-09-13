import { useField } from 'formik';
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function KodlamaioTextArea({ label, ...props }) {

    const [field, meta] = useField(props);
    return (
<FormField>
<label htmlFor={props.id || props.name}>{label}</label>
        <textarea className="text-area" {...field} {...props} />
        {meta.touched && meta.error ? (
         <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}

</FormField>
    )
}

