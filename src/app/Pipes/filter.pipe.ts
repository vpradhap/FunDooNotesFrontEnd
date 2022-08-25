import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search?: any): any {

    if (!search) {
      return value;
    } else {
      search = search.toLocaleLowerCase();
    }
    return value.filter((note: any) => {
      return note.title.toLocaleLowerCase().includes(search) |
        note.description.toLocaleLowerCase().includes(search);
    })
  }
}
