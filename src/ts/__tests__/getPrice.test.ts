
import { cart } from "../app";

test("get price", async () => {
    await expect(cart.getPrice()).toBe(1250);
})

test("get price width discount", async () => {
   await expect(cart.getPriceWithDiscont(10)).toBe(1125);
})

test("delete item", () => {
    cart.deleteById(1212);
    console.log(cart.items)
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toMatchObject({
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