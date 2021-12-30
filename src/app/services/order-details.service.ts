import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  foodDetails = [
    {
    id : 1,
    foodName:"Peri-Peri Chicken Pizza",
    foodDetails:"Pan-Fried Masala Paneer",
    foodPrice: 200, 
    foodImg:"https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id : 2,
      foodName:"Paneer Butter Masala",
      foodDetails:"Mozorella Cheese on the top",
      foodPrice: 160, 
      foodImg:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id : 3,
      foodName:"Grilled Chicken Sandwich",
      foodDetails:"Grilled Chicken",
      foodPrice: 150, 
      foodImg:"https://images.unsplash.com/photo-1604467707321-70d5ac45adda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGNoaWNrZW4lMjBzYW5kd2ljaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id : 4,
      foodName:"Red Sauce Pasta",
      foodDetails:"Tangy Red Sauce with veggies",
      foodPrice: 150, 
      foodImg:"https://images.unsplash.com/photo-1630409352591-abc3cb4635de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
    },
    {
      id : 5,
      foodName:"Noodles",
      foodDetails:"Delicious Noodles with Spicy Taste",
      foodPrice: 100, 
      foodImg:"https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
    },
    {
      id : 6,
      foodName:"Veg Burger",
      foodDetails:"Delicious Spicy Veggies with Cheesy fill",
      foodPrice: 80, 
      foodImg:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },


  ]
}
