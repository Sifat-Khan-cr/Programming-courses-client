import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center m-2'>
                <h1>what is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>

            </div>
            <div className='text-center m-2'>
                <h1>Why are you using firebase? </h1>
                <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>

            </div>
            <div className='text-center m-2'>
                <h1>How does the private route work?</h1>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>

            </div>
            <div className='text-center m-2'>
                <h1>What is Node? How does Node work?</h1>
                <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>

            </div>
        </div>
    );
};

export default Blog;