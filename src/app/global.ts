export class Globals  {
    public rpAmount: number = 4
    public couponArray = '';
    public ticketArray = [];
    public RemovedTicketsArray = [];

    constructor() {

    }

    resetRP() {
        this.rpAmount = 0;
    }

    get getRPAmount() {
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