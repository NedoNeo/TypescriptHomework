import Cart from "../cart";
import Movie from "../movie";

test("add to cart", () => {
    const cart = new Cart();

    cart.add(new Movie(1212,"Мстители",250,2012,"Usa","Avengers, Assemble!","фантастика,боевик,фэнтези","137мин / 02:17")); 
    cart.add(new Movie(1414,"The lord of the ring",1000,2001,"New-Zeland","one ring to rule them all","фэнтези,боевик","178 / 02:58"));
    

    expect(cart.items[0]).toMatchObject(
         {
          id: 1212,
          name: 'Мстители',
          price: 250,
          year: 2012,
          country: 'Usa',
          slogan: 'Avengers, Assemble!',
          geners: [ 'фантастика', 'боевик', 'фэнтези' ],
          time: '137мин / 02:17'
        });
    expect(cart.items[1]).toMatchObject(
        {
            id: 1414,
            name: 'The lord of the ring',
            price: 1000,
            year: 2001,
            country: 'New-Zeland',
            slogan: 'one ring to rule them all',
            geners: [ 'фэнтези', 'боевик' ],
            time: '178 / 02:58'
          })
})