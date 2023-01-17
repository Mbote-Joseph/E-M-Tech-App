import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { CustomerModel } from '../customer.model';
import { FilterPipe } from './Pipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  formValue!: FormGroup;
  pipes: [FilterPipe] | undefined;
  searchTerm: string = '';

  CustomerModelObject: CustomerModel = new CustomerModel();
  CustomerData: CustomerModel[] = [];
  showAdd: boolean = false;
  showUpdate: boolean = false;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      CustID: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      amount: [''],
      type: [''],
    });
    this.getCustomerDetails();
  }

  postCustomerDetails() {
    this.showUpdate = false;
    this.showAdd = true;
    this.CustomerModelObject.CustID = this.formValue.value.CustID;
    this.CustomerModelObject.firstName = this.formValue.value.firstName;
    this.CustomerModelObject.lastName = this.formValue.value.lastName;
    this.CustomerModelObject.email = this.formValue.value.email;
    this.CustomerModelObject.phone = this.formValue.value.phone;
    this.CustomerModelObject.amount = this.formValue.value.amount;
    this.CustomerModelObject.type = this.formValue.value.type;

    console.log(this.CustomerModelObject);

    this.api.postCustomer(this.CustomerModelObject).subscribe(
      (res: any) => {
        console.log(res);
        alert('Customer Added successfully');
        this.getCustomerDetails();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
      },
      () => {
        alert('Something Went wrong');
      }
    );
  }

  getCustomerDetails() {
    this.api.getCustomer().subscribe((res: any) => {
      console.log(res);
      this.CustomerData = res;
    });
  }

  updateCustomerDetails(Customer: CustomerModel) {
    this.showAdd = false;
    this.showUpdate = true;
    this.CustomerModelObject.id = Customer.id;
    this.formValue.controls['CustID'].setValue(Customer.CustID);
    this.formValue.controls['firstName'].setValue(Customer.firstName);
    this.formValue.controls['lastName'].setValue(Customer.lastName);
    this.formValue.controls['email'].setValue(Customer.email);
    this.formValue.controls['phone'].setValue(Customer.phone);
    this.formValue.controls['amount'].setValue(Customer.amount);
    this.formValue.controls['type'].setValue(Customer.type);
  }

  updateCustomer() {
    this.CustomerModelObject.CustID = this.formValue.value.CustID;
    this.CustomerModelObject.firstName = this.formValue.value.firstName;
    this.CustomerModelObject.lastName = this.formValue.value.lastName;
    this.CustomerModelObject.email = this.formValue.value.email;
    this.CustomerModelObject.phone = this.formValue.value.phone;
    this.CustomerModelObject.amount = this.formValue.value.amount;
    this.CustomerModelObject.type = this.formValue.value.type;

    console.log(this.CustomerModelObject);

    this.api
      .updateCustomer(this.CustomerModelObject, this.CustomerModelObject.id)
      .subscribe(
        (res: any) => {
          console.log(res);
          alert('Customer Updated successfully');
          this.getCustomerDetails();
          let ref = document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
        },
        () => {
          alert('Something Went wrong');
        }
      );
  }

  deleteCustomerDetails(id: number) {
    this.api.deleteCustomer(id).subscribe((res: any) => {
      console.log(res);
      alert('Customer Deleted successfully');
      this.getCustomerDetails();
    });
  }

  //  Search functionality
  searchCustomer() {
    if (this.CustomerModelObject.CustID == '') {
      this.ngOnInit();
    } else {
      this.CustomerData = this.CustomerData.filter((res) => {
        return (
          res.CustID.toLocaleLowerCase().match(
            this.CustomerModelObject.CustID.toLocaleLowerCase()
          ) ||
          res.firstName
            .toLocaleLowerCase()
            .match(this.CustomerModelObject.CustID.toLocaleLowerCase()) ||
          res.lastName
            .toLocaleLowerCase()
            .match(this.CustomerModelObject.CustID.toLocaleLowerCase()) ||
          res.email
            .toLocaleLowerCase()
            .match(this.CustomerModelObject.CustID.toLocaleLowerCase()) ||
          res.phone
            .toLocaleLowerCase()
            .match(this.CustomerModelObject.CustID.toLocaleLowerCase()) ||
          res.amount
            .toLocaleLowerCase()
            .match(this.CustomerModelObject.CustID.toLocaleLowerCase()) ||
          res.type
            .toLocaleLowerCase()
            .match(this.CustomerModelObject.CustID.toLocaleLowerCase())
        );
      });
    }
  }
}
