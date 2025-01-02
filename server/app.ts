import express, { Request, Response } from "express";
import fs from "fs";

const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/conversation", (req: Request, res: Response) => {
  const dta = JSON.parse(fs.readFileSync("./dta.json", { encoding: "utf8" }));
  res.write(dta);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
