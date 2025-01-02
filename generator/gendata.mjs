import fs from "fs";
import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const dta = [];

for (let i = 0; i < 20; i++) {
  const msg = {
    role: "user",
    content: lorem.generateParagraphs(4),
  };
  dta.push(msg);
}

fs.writeFileSync("dta.json", JSON.stringify(dta), { encoding: "utf8" });
