import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";
import * as CAT from "./logger.constants";

@Component({
    selector: "component1",
    template: `
        <StackLayout>
            <Label text="Component 1"></Label>
            <Button text="Print Log" (tap)="printLog()"></Button>
            <Button text="Print Warn" (tap)="printWarn()"></Button>
        </StackLayout>
        `,
    providers: [LoggerService]
})
export class Com1Component {
    constructor(private _loggerService: LoggerService) {
        this._loggerService.setName('Component 1');
        this._loggerService.info('component 1 initialization', CAT.CAT_INIT);
    }

    printLog() {
        this._loggerService.log('1 is an odd number', CAT.CAT_NORMAL);
    }

    printWarn() {
        this._loggerService.warn('warning', CAT.CAT_ENV);
    }
}