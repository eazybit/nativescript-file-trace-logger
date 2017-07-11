import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  providers: [LoggerService]
})
export class AppComponent {
  constructor(private _loggerService: LoggerService) {
        this._loggerService.setName('App Component');
    }

  printLog() {
    this._loggerService.log('app component');
  }
}
