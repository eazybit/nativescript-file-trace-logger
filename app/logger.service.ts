import { Injectable } from "@angular/core";
import { knownFolders, File, Folder } from "file-system";

var trace = require("trace");
var documents = knownFolders.documents();
var folder = documents.getFolder("logs");
var file = folder.getFile("log.txt");
console.log(file.path);

export class FileWriter {
    constructor() {} 
    write(message, category, type) {
        let msgType = 'LOG ';
        switch(type) {
            case trace.messageType.log:
                msgType = 'LOG ';
                break;
            case trace.messageType.info:
                msgType = 'INFO';
                break;
            case trace.messageType.warn:
                msgType = 'WARN';
                break;
            case trace.messageType.error:
                msgType = 'ERROR';
                break;
            default:
                break;
        }
        let traceMessage = '[' + new Date().toISOString() + '] [' + category + '] [' + msgType + '] ' + message;
        let contents = file.readTextSync();
        let newContents = contents ? contents + traceMessage : traceMessage;
        file.writeTextSync(newContents + '\n');
    }
}

trace.enable();
trace.addWriter(new FileWriter());
trace.addCategories('Normal');

@Injectable()
export class LoggerService {
    private _name: string;

    setName(name: string) {
        this._name = name;
    }

    write(msg, category, type) { 
        msg = '[' + this._name + ']: ' + msg;
        trace.write(msg, category, type);
    }

    log(msg) {
        this.write(msg, 'Normal', trace.messageType.log);
    }

    info(msg) {
        this.write(msg, 'Normal', trace.messageType.info);
    }

    warn(msg) {
        this.write(msg, 'Normal', trace.messageType.warn);
    }

    error(msg) {
        this.write(msg, 'Normal', trace.messageType.error);
    }
}