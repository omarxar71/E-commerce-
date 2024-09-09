import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soldOut',
  standalone: true
})
export class SoldOutPipe implements PipeTransform {

  transform(qty:number , limit:number): string | null {
    if (qty < limit ){
      return `only ${qty} left on the stock`
    }else{
      return null
    }
  }

}
