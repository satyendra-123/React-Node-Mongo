import { FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidator{
    
    static mobileNumValidator(c: FormControl): ValidationErrors {
      const phNum =  Number(c.value);
      return null;
    }
}