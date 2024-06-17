import Buyable from "./Buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getPrice(): number {
       return  this.items.reduce((acc: number, item) => {
            return acc + item.price;
        }, 0)
    }

    getPriceWithDiscont(discont: number): number {
        let discontPrice: number = this.getPrice() - this.getPrice()*(discont/100);
        return discontPrice;
    }

    deleteById(id: number): void {
        this._items = this._items.filter(item => item.id!== id);
    }


}