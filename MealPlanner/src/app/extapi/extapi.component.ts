import { Component, OnInit } from '@angular/core';
import { ExtapiService } from '../services/extapi.service';

@Component({
  selector: 'app-extapi',
  templateUrl: './extapi.component.html',
  styleUrls: ['./extapi.component.css']
})
export class ExtapiComponent implements OnInit {
public apis;
  constructor(private extapiService: ExtapiService) { }

  ngOnInit(): void {
    this.getApi();
  }


  getApi() {
    this.extapiService.getApi().subscribe(
      data => {this.apis = data},
      err => console.error(err),
      () => console.log('apis loaded')
  
    );
  }

}
