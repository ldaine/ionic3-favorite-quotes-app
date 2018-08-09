import { LibraryPage } from './library';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        LibraryPage
    ], 
    imports: [
        IonicPageModule.forChild(LibraryPage)
    ]
})
export class LibraryPageModule {}