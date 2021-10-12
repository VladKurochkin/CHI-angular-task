export class Loan{
    constructor(public id:string, public tranche:string, public title:string, 
        public available:string, public annualised_return:string, 
        public term_remaining:string, public ltv:string, public amount:string,
        public isInvested:boolean = false){}
}