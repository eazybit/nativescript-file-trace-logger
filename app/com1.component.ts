import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";

@Component({
    selector: "component1",
    template: `
        <StackLayout>
            <Label text="Component 1"></Label>
            <Button text="Print Log" (tap)="printLog()"></Button>
        </StackLayout>
        `,
    providers: [LoggerService]
})
export class Com1Component {
    constructor(private _loggerService: LoggerService) {
        this._loggerService.setName('Component 1');
    }

    printLog() {
        this._loggerService.warn('component 1');
    }
}