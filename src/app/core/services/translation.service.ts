import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core/dist/lib/translate.service';
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly TranslateService = inject(TranslateService)

  constructor() {
    const savedLang = localStorage.getItem('lang') || 'en'
    this.TranslateService.setDefaultLang(savedLang)
    this.TranslateService.use(savedLang)
    this.changeDirection()
   }
   changeDirection(){
    const savedLang = localStorage.getItem('lang') || 'en';
    if(savedLang == 'en'){
      document.documentElement.dir='ltr';
      document.documentElement.lang='en';
    }else if(savedLang=='ar'){
      document.documentElement.dir='rtl';
      document.documentElement.lang='ar';
    }
   }
   changlang(lang:string){
    
   }
}
