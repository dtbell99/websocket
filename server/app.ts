import express, { Request, Response } from "express";
import fs from "fs";

const app = express();
const port = 3001;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/api/conversation", async (req: Request, res: Response) => {
  const dta = JSON.parse(fs.readFileSync("./dta.json", { encoding: "utf8" }));
  let cntr = 0;
  for (const obj of dta) {
    cntr++;
    let chars = Math.floor(Math.random() * 300);
    if (chars < 100) chars += 100;
    //if (chars === 0) chars = 100;
    obj.content = obj.content.substring(0, chars);
    res.write(JSON.stringify(obj));
    await sleep(2000);
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
