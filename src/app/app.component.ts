import { Component, OnInit } from '@angular/core';
import { ContractService } from './services/contract.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web3';

  constructor( 
    private http: HttpClient,
    private contractService: ContractService 
  ) {
    
    // const web3 = new Web3('ws://localhost:8546');

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.contractService.logThings();
  }
  onClick(){
    this.contractService.connectAccount();
    // this.contractService.getGoogle().subscribe();
    // this.contractService.loadWeb3();
    // this.contractService.logThings();
  }
}
