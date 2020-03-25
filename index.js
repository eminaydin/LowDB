const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ students: [] }).write();

const result = db
  .get("students")
  .push({ name: process.argv[2], age: process.argv[3] })
  .write();

console.log(result);
