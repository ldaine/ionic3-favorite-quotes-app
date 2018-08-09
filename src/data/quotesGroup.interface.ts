import { Quote } from "./quote.interface";

export interface QuotesGroup {
    category: string;
    quotes:   Quote[],
    icon:     string
}