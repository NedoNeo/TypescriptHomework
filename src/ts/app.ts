import Cart from "./cart";
import Movie from "./movie";

export const cart = new Cart();

cart.add(new Movie(1212,"Мстители",250,2012,"Usa","Avengers, Assemble!","фантастика,боевик,фэнтези","137мин / 02:17")); 
cart.add(new Movie(1414,"The lord of the ring",1000,2001,"New-Zeland","one ring to rule them all","фэнтези,боевик","178 / 02:58"));