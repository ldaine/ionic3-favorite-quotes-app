import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private altBackground: boolean = false; 

  setAlternativeBackground(isAlt: boolean){
    this.altBackground = isAlt; 
  }

  isAltBackground():boolean{
    return this.altBackground; 
  }
}
