import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToStringPipe'
})
export class EnumToStringPipe implements PipeTransform {
  transform(value: number, enumType: any): string {
    return enumType[value];
  }
}