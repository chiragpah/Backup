import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export function customTitleValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (value && value.toLowerCase().includes('awesome')) {
            return { 'invalidTitle': true }; // Return an error if the title contains 'awesome'
        }
        return null; // Return null if the title is valid
    };
}