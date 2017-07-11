import { Injectable } from "@angular/core";
import { knownFolders, File, Folder } from "file-system";
import * as CAT from "./logger.constants";

var trace = require("trace");
var documents = knownFolders.documents();
var folder = documents.getFolder("logs");
var file = folder.getFile("log.txt");
console.log(file.path);

export class FileWriter {
    constructor() {} 
    write(message, category, type) {
        let msgType = 'LOG';
        switch(type) {
            case trace.messageType.log:
                msgType = 'LOG';
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
for(let cat in CAT) {
    trace.addCategories(CAT[cat]);
}

@Injectable()
export class LoggerService {
    private _name: string;

    setName(name: string) {
        this._name = name;
    }

    write(msg, category, type) {
        if(category == null) {
            category = CAT.CAT_NORMAL;
        } 
        msg = '[' + this._name + ']: ' + msg;
        trace.write(msg, category, type);
    }

    log(msg, category?) {
        this.write(msg, category, trace.messageType.log);
    }

    info(msg, category?) {
        this.write(msg, category, trace.messageType.info);
    }

    warn(msg, category?) {
        this.write(msg, category, trace.messageType.warn);
    }

    error(msg, category?) {
        this.write(msg, category, trace.messageType.error);
    }
}