"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 3001;
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/api/conversation", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dta = JSON.parse(fs_1.default.readFileSync("./dta.json", { encoding: "utf8" }));
    let cntr = 0;
    for (const obj of dta) {
        cntr++;
        let chars = Math.floor(Math.random() * 300);
        if (chars < 100)
            chars += 100;
        //if (chars === 0) chars = 100;
        console.log("chars:", chars);
        obj.content = obj.content.substring(0, chars);
        console.log("Sending Obj:" + cntr);
        res.write(JSON.stringify(obj));
        yield sleep(2000);
    }
    res.end();
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
