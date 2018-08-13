import { SettingsService } from './../../services/settings';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
    selector: 'page-favorites', 
    templateUrl: 'favorites.html'
})
export class FavoritesPage implements OnInit {

    favoriteQuotes: Quote[]; 
    
    constructor(private quotesService: QuotesService, 
                private settingsService: SettingsService, 
                private modalCtrl: ModalController){}

    ngOnInit(){
        this.favoriteQuotes = this.quotesService.getFavoriteQuotes(); 
    }

    ionViewWillEnter(){
        console.log('ionViewWillEnter'); 
        this.favoriteQuotes = this.quotesService.getFavoriteQuotes(); 
    }

    onViewQuote(quote: Quote){
        const modal = this.modalCtrl.create('QuotePage', quote); 
        modal.present(); 
        modal.onDidDismiss((remove:boolean)=>{
            if(remove){
                this.onRemoveFromFavorites(quote); 
            }
        });
    }
    onRemoveFromFavorites(quote:Quote){
        this.quotesService.removeQuoteFromFavorites(quote); 
        //this.favoriteQuotes = this.quotesService.getFavoriteQuotes(); 
        const foundQuote = this.favoriteQuotes.findIndex((item: Quote)=>quote.id == item.id); 
        this.favoriteQuotes.splice(foundQuote, 1); 
    }

    getBackground(){
        return this.settingsService.isAltBackground() ? 'altQuoteBackground': 'quoteBackground'; 
    }
}