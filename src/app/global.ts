export class Globals  {
    public rpAmount: number = 3
    public couponArray = [];
    public ticketArray = [];
    public RemovedTicketsArray = [];
    public RemovedCouponsArray = [];

    constructor() {

    }

    resetRP() {
        this.rpAmount = 0;
    }

    getRPAmount() {
        return this.rpAmount;
    }

    addRP(amount:number) {
        this.rpAmount + amount;
    }

    pushnewCoupon(title:string) {
        console.log(title)
    }

    pushnewTicket(title:string) {
        console.log(title)
    }
}