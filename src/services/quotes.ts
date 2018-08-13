import { Quote } from './../data/quote.interface';

export class QuotesService {
    private favoriteQuotes: Quote[] = []; 

    addQuoteToFavorite(quote: Quote){
        this.favoriteQuotes.push(quote); 
    }
    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex((item: Quote) => item.id == quote.id); 
        this.favoriteQuotes.splice(position, 1); 
    }

    getFavoriteQuotes(){
        //to leave favoritite quotes private (by giving a copy to outside)
        console.log('getFavoriteQuotes',this.favoriteQuotes)
        return this.favoriteQuotes.slice(); 
    }

    isQuoteFavorite(quote: Quote){
        return this.favoriteQuotes.find((item:Quote)=> {
            return item.id == quote.id
        }); 
    }
}