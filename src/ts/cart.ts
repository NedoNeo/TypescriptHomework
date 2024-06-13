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
        const massiveItems: Buyable[] = this.items;
        let totalprice: number = 0;
        massiveItems.forEach(item => {
            totalprice += item.price;
        })
        return totalprice;
    }

    getPriceWithDiscont(discont: number): number {
        let discontPrice: number = this.getPrice() - this.getPrice()*(discont/100);
        return discontPrice;
    }

    deleteById(id: number): void {
        this._items.forEach(item => {
            if(item.id === id) {
                 this._items.splice(this._items.indexOf(item),1);
                
            }
        })
    }


}