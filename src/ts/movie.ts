import Buyable from "./Buyable";
export default class Movie implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly year: number;
    readonly country: string;
    readonly slogan: string;
    readonly geners: string[];
    readonly time: string;
    constructor(id: number, name: string, price: number, year: number, country: string, slogan: string, geners: string, time: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.geners = geners.split(',');
        this.time = time;
    }

}