import { Component } from '@angular/core';
import { HttpService} from './http.service';
import { Loan } from './loan';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
        providers: [HttpService]
})
export class AppComponent {
    isPopupShown : boolean = true;
    isInvestedShown : boolean = true;
    loans: Loan[]=[];
    currentLoan: Loan;

    constructor(private httpService: HttpService) {}
    onButtonChange() {
        this.isPopupShown = !this.isPopupShown
    }
    onButtonClick(id) {
        this.currentLoan = this.loans.find((loan:Loan) => { return loan.id === id})
        this.isPopupShown = !this.isPopupShown
    }
    availableSum() {
        let total = 0;
        for(let loan of this.loans) {
            total += Number(loan.available)
        }
        return total
    }
    ngOnInit() {
        this.httpService.getData().subscribe((data:any) =>
        {
            this.loans=data["loans"]
            for(let loan of this.loans) {
                loan.available = loan.available.split(',').join('')
            }
        })
    }
    changeAvailable(yourAvailable) {
        if (yourAvailable.value > 0 && yourAvailable.value <= this.currentLoan.available) {
            yourAvailable=Number(this.currentLoan.available) - yourAvailable.value
            this.currentLoan.available = yourAvailable
            this.currentLoan.isInvested = true
            return yourAvailable
        }
        return 0
    }
}
