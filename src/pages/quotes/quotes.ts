import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { QuotesGroup } from './../../data/quotesGroup.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-quotes', 
    templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
    quotesGroup: QuotesGroup; 

    constructor(private navParams: NavParams, 
                private alertCtrl: AlertController, 
                private quotesService: QuotesService){}
  
    // ionViewDidLoad(){
    //   this.quotesGroup = this.navParams.data; 
    //   //add elvis operator (?)
    // }

    ngOnInit(){
        this.quotesGroup = this.navParams.data; 
    }

    onAddToFavorites(selectedQuote: Quote){
        const alert = this.alertCtrl.create({
            title: 'Add Quote', 
            subTitle: 'Are qou sure? ', 
            message: 'Are qou sure qou want to add the quote?', 
            buttons: [
                {
                    text: 'Yes', 
                    handler: ()=>{
                        console.log('ok'); 
                        this.quotesService.addQuoteToFavorite(selectedQuote); 
                    }
                }, 
                {
                    text: 'No', 
                    role: 'cancel', 
                    handler: ()=>{
                        console.log('no'); 
                    }
                }
            ]
        }); 
        alert.present(); 
    }

    onRemoveFromFavorites(selectedQuote: Quote){
        this.quotesService.removeQuoteFromFavorites(selectedQuote); 
    }

    isFavorite(quote: Quote){
        return this.quotesService.isQuoteFavorite(quote); 
    }
}