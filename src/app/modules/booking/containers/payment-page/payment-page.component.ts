declare var require: any
import { Component, Input } from '@angular/core';

import * as models from '../../domain/models';

import * as models1 from '../../../user/models';

import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as reducers from '../../reducers';
import * as actions from '../../actions/booking-new';

import * as reducers1 from '../../../user/reducers';
import { CreatePackageService } from '../../services/booking/create-package-service';
import { CheckPaymentService } from '../../services/booking/check-payment-service';
import { Credit } from '../../domain/models/credit';



@Component({
    selector: 'payment-page',
    templateUrl: './payment-page.component.html'
})
export class PaymentPageComponent {

    errorMessage: String;
    credit : Credit;
    totalMoney : any;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private store$: Store<any>,
        private chkPayService: CheckPaymentService
    ) {
        this.credit = new Credit();


    }

    ngOnInit(): void {
        $('#txtAmount').val(parseInt(localStorage.getItem('activityMoney')) + parseInt(localStorage.getItem('accommodationMoney'))
        + parseInt(localStorage.getItem('transMoney')) + parseInt(localStorage.getItem('destinationMoney')));
        
    }

    checkout(): void {


        let cardnum = $('#txtCardNum').val();
        let cardexpire = $('#txtCardExpiration').val();
        let cardcvv = $('#txtCardCvv').val();
        let amount = $('#txtAmount').val();

        if(cardnum == '' || cardexpire == '' || cardcvv == '' || amount == '')
        {
            
            return;
        }


        this.credit.user_id = parseInt(localStorage.getItem('user_id'));
        this.credit.cardnum = cardnum;
        this.credit.cardexpire = cardexpire;
        this.credit.cardcvv = cardcvv;
        this.credit.amount = amount;
  


        this.chkPayService.transferPayment(this.credit)
            .subscribe(response => {
                alert(response);
                
            },
                error => this.errorMessage = <any>error);




    }

}
