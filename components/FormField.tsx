import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Controller, FieldValues, Path, Control } from 'react-hook-form'
import { string } from 'zod/v4-mini';

interface FormFieldProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type? : 'text' | 'email' | 'password' | 'file'
}

const FormField = ({control, name, label, placeholder, type="text"}: FormFieldProps<T>) => {
  return (
    <div>
        <Controller name={name} control={control} render={({field}) => (
            <FormItem>
                <FormLabel className='label'>Username</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
            </FormItem>
            )}
        />
    </div>
  )
}

export default FormField
