import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'userFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val:any) => {
      let rVal = (val.contact.includes(args)) ||  val.first_name.toLocaleLowerCase().includes(args) || (val.email.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}