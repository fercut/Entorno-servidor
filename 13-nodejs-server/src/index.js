import http from 'http';

import { routes, defaultRoute } from ',/server/routes.js';

const port = 3000;

const server = http.createServer((req, resp) => {
    const route = routes[request.url.slice(1)] || defaultRoute;
    route(req, resp);
});

// * Configure server
server.listen(port, ()=>{
    console.log(`Server is ready at http://localhost:${port}`);
});
