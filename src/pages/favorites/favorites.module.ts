import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [ FavoritesPage ], 
    imports:  [
        IonicPageModule.forChild(FavoritesPage)
    ]
})
export class FavoritesPageModule {}