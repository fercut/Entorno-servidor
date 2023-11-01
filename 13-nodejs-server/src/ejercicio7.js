import http from 'http';
import querystring from 'querystring';

const port = 3000;

function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
  
      if (i % 3 == 0 && i % 5 == 0) {
        result.push("fizzbuzz");
      }else if (i % 3 == 0) {
        result.push("fizz");
      }else if (i % 5 == 0) {
        result.push("buzz");
      }else {
        result.push(i);
      }
    }
  
    return result;
}

const server = http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/json");
    const n = req.url;

    const q = querystring.parse(`n=${n.split("/").join("")}`);;
    resp.writeHead(200);
    resp.end(`${fizzBuzz(q.n)}`);
});

// * Configure server
server.listen(port, ()=>{
    console.log(`Server is ready at http://localhost:${port}`);
});