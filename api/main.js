const server = require("./app");
const seq = require("./db");


seq.sync().then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});