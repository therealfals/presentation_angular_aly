import { Pipe, PipeTransform } from '@angular/core';
import {UtilService} from '../biens/util.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {
constructor(private utilService: UtilService) {
}
  transform(value: number, sep: string): string {
    return this.utilService.formatMillier(value, '.');
  }

}
