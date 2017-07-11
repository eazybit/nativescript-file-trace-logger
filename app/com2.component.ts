import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";
import * as CAT from "./logger.constants";

@Component({
    selector: "component2",
    template: `
        <StackLayout>
            <Label text="Component 2"></Label>
            <Button text="Print Log" (tap)="printLog()"></Button>
            <Button text="Print Error" (tap)="printError()"></Button>
        </StackLayout>
        `,
    providers: [LoggerService]
})
export class Com2Component {
    constructor(private _loggerService: LoggerService) {
        this._loggerService.setName('Component 2 ');
        this._loggerService.info('component 2 initialization', CAT.CAT_INIT);
        
    }

    printLog() {
        this._loggerService.log('2 is an even number', CAT.CAT_NORMAL);
    }

    printError() {
        this._loggerService.error('error happens', CAT.CAT_NET);
    }
}