import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";

@Component({
    selector: "component2",
    template: `
        <StackLayout>
            <Label text="Component 2"></Label>
            <Button text="Print Log" (tap)="printLog()"></Button>
        </StackLayout>
        `,
    providers: [LoggerService]
})
export class Com2Component {
    constructor(private _loggerService: LoggerService) {
        this._loggerService.setName('Component 2');
    }

    printLog() {
        this._loggerService.info('component 2');
    }
}