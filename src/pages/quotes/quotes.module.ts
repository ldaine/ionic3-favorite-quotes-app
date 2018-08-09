import { IonicPageModule } from 'ionic-angular';
import { QuotesPage } from './quotes';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        QuotesPage
    ], 
    imports: [
        IonicPageModule.forChild(QuotesPage)
    ]
})
export class QuotesPageModule {}