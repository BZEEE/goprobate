import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ObjectAttributeMapperService {

  constructor() { }

  mapObjectPropertiesToForm(
    form: FormGroup, 
    model: Object, 
    propertiesToConvert?: Object) {

      // console.log("model => form")
      let tempFormObject = form.getRawValue();
      let formAttributes = Object.getOwnPropertyNames(tempFormObject);
      let modelAttributes = Object.getOwnPropertyNames(model);
      

      modelAttributes.forEach((prop) => {
        // make sure same property exists in form and model, otherwise unable to map
        if (formAttributes.includes(prop)) {
          if (propertiesToConvert != null && propertiesToConvert.hasOwnProperty(prop)) {
            // switch(propertiesToConvert[prop]) {
            //   // update the form model based on the specified conversion type
            //   case InputConversionEnum.toArray:
            //     // console.log(this.listFormatterSvc.parseDelimiterString(model[prop], ","))
            //     // tempFormObject[prop] = this.listFormatterSvc.parseDelimiterString(model[prop], ",");
            //     form.get(prop).setValue(this.listFormatterSvc.parseDelimiterString(model[prop], ","))
            //     break;
            //   case InputConversionEnum.toCommaSeparatedString:
            //     // tempFormObject[prop] = this.listFormatterSvc.createDelimiterString(model[prop], ",");
            //     form.get(prop).setValue(this.listFormatterSvc.createDelimiterString(model[prop], ","));
            //     break;
            //   case InputConversionEnum.toNumber:
            //     // tempFormObject[prop] = Number(model[prop])
            //     if (model[prop] == null ||  model[prop] === "") {
            //       // tempFormObject[prop] = null
            //       form.get(prop).setValue(null)
            //     } else {
            //       // tempFormObject[prop] = Number(model[prop])
            //       form.get(prop).setValue(Number(model[prop]))
            //     }
            //     break;
            //   case InputConversionEnum.toFormControlArray:
            //     let formArray = form.get(prop) as FormArray
            //     let values = this.listFormatterSvc.parseDelimiterString(model[prop], ",");

            //     formArray.clear();
            //     for (let i = 0; i < values.length; i++) {
            //       formArray.push(new FormControl(values[i]))
            //     }
            //     form.get(prop).setValue(values);
            //     break;
            //   default:
            //     break;
            // } 
          } else {
            // no special conversion requierd, perform straight mapping
            // tempFormObject[prop] = model[prop];
            form.get(prop).setValue(model[prop]);
          }
        }
      })
      // set updated values to form group
      // console.log(tempFormObject)
      // form.patchValue(tempFormObject);
      // console.log(form)
  }

  mapFormPropertiesToObject(
    form: FormGroup, 
    model: Object, 
    propertiesToConvert?: Object) {
      // console.log("form => model")
      let tempFormObject: Object = form.getRawValue();
      let formAttributes: string[] = Object.getOwnPropertyNames(tempFormObject);
      let modelAttributes: string[] = Object.getOwnPropertyNames(model);

      formAttributes.forEach((prop) => {
        // make sure same property exists in form and model, otherwise unable to map
        if (modelAttributes.includes(prop)) {
          if (propertiesToConvert != null && propertiesToConvert.hasOwnProperty(prop)) {
            // switch(propertiesToConvert[prop]) {
            //   // update the form model based on the specified conversion type
            //   case InputConversionEnum.toArray:
            //     model[prop] = this.listFormatterSvc.parseDelimiterString(tempFormObject[prop], ",");
            //     break;
            //   case InputConversionEnum.toCommaSeparatedString:
            //     model[prop] = this.listFormatterSvc.createDelimiterString(tempFormObject[prop], ",");
            //     break;
            //   case InputConversionEnum.toNumber:
            //     if (tempFormObject[prop] == null || tempFormObject[prop] === "") {
            //       model[prop] = null
            //     } else {
            //       model[prop] = Number(tempFormObject[prop])
            //     }
            //     break;
            //   default:
            //     break;
            // } 
          } else {
            // no special conversion requierd, perform straight mapping
            model[prop] = tempFormObject[prop];
          }
        }
      })
  }
}
