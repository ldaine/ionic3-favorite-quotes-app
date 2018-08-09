import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { QuotesGroup } from '../../data/quotesGroup.interface';
import quotes from '../../data/quotes';

@IonicPage()
@Component({
    selector: 'page-library', 
    templateUrl: 'library.html'
})
export class LibraryPage implements OnInit{
    quoteCollection: QuotesGroup[]; 

    ngOnInit(){
        this.quoteCollection = quotes; 
    }
}