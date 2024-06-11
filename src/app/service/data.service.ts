import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listArticles = [
    {
      titleArticle: "Vélo", 
      prixArticle:230,
      available:false
    },
    {
      titleArticle: "Voiture", 
      prixArticle:50,
      available:true
    },
    {
      titleArticle: "Bus", 
      prixArticle:1000,
      available:false
    },
    {
      titleArticle: "Trotinette", 
      prixArticle:75,
      available:true
    },
    {
      titleArticle: "Skateboard", 
      prixArticle:10,
      available:true
    },
  ]
  

  constructor() { }
}
