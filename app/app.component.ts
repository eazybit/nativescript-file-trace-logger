import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";
import * as CAT from "./logger.constants";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  providers: [LoggerService]
})
export class AppComponent {
  constructor(private _loggerService: LoggerService) {
        this._loggerService.setName('App Component');
        this._loggerService.info('app component initialization', CAT.CAT_INIT);
    }

  printLog() {
    this._loggerService.log('app component logs a log');
  }
}
