import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listArticles = [
    {
      id: 1,
      titleArticle: "Vélo", 
      prixArticle:230,
      available:false,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam quod inventore voluptate voluptates explicabo eos nam ut ipsum nobis."
    },
    {
      id: 2,
      titleArticle: "Voiture", 
      prixArticle:50,
      available:true,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam quod inventore voluptate voluptates explicabo eos nam ut ipsum nobis."
    },
    {
      id: 3,
      titleArticle: "Bus", 
      prixArticle:1000,
      available:false,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam quod inventore voluptate voluptates explicabo eos nam ut ipsum nobis."
    },
    {
      id: 4,
      titleArticle: "Trotinette", 
      prixArticle:75,
      available:true,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam quod inventore voluptate voluptates explicabo eos nam ut ipsum nobis."
    },
    {
      id: 5,
      titleArticle: "Skateboard", 
      prixArticle:10,
      available:true,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam quod inventore voluptate voluptates explicabo eos nam ut ipsum nobis."
    },
  ]

  constructor() { }

  getArticles(id: number) {
    return this.listArticles.find(article => article.id === id);
  }

}
