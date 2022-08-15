export class Reservation {
    id!: number;
    car_id!: number;
    reservation_code!: string;
    from_date!: Date;
    to_date!: Date;
    user_id!: number;
    total_price!: number;

    constructor(car_id: number, from_date: Date, to_date: Date, user_id: number, total_price: number) {
        this.car_id = car_id;
        this.from_date = from_date;
        this.to_date = to_date;
        this.user_id = user_id;
        this.total_price = total_price;
    }

    public get getReservationCode() {
        return this.reservation_code;
    }
}
