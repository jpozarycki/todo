import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  welcomeMessageFromService: string;
  name = '';

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message);
    // console.log(this.route.snapshot.params.name);
    this.name = this.route.snapshot.params.name;
  }

  // getWelcomeMessage() {
  //   // console.log(this.welcomeDataService.executeHelloWorldService());
  //   this.welcomeDataService.executeHelloWorldService().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error1 => this.handleErrorResponse(error1)
  //   );
  //
  //   // console.log('last line of getWelcomeMessage');
  // }
  getWelcomeMessageWithParameter() {
    // console.log(this.welcomeDataService.executeHelloWorldService());
    this.welcomeDataService.executeHelloWorldWithPathVariableService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error1 => this.handleErrorResponse(error1)
    );

    // console.log('last line of getWelcomeMessage');
  }

  private handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  private handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
  }
}
