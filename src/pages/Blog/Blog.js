const Blog = () => {
  document.title = "Blog";

  return (
    <div className="container bg-light  mt-4 ">
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:1. Difference between SQL and NoSQL?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <b>SQL:</b>
          RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).
          <p className="card-text">
            1. These databases have fixed or static or predefined schema.
          </p>
          <p>
            2. These databases are not suited for hierarchical data storage.
          </p>
          <p>3. These databases are best suited for complex queries.</p>
          <p>4. Vertically Scalable.</p>
          <p>5. Follows ACID property</p>
          <p>6. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.</p>
          <br />
          <b>NoSQL:</b>
          Non-relational or distributed database system.
          <p>1. They have dynamic schema.</p>
          <p>
            2. These databases are best suited for hierarchical data storage.
          </p>
          <p>3. These databases are not so good for complex queries.</p>
          <p>4. Horizontally scalable.</p>
          <p>5. Follows CAP(consistency, availability, partition tolerance).</p>
          <p>6. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <b>Q:2. What is JWT, and how does it work?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>JWT:</b>
            JSON Web Token is an open industry standard used to share
            information between two entities, usually a client (like your app’s
            frontend) and a server (your app’s backend). They contain JSON
            objects which have the information that needs to be shared. Each JWT
            is also signed using cryptography (hashing) to ensure that the JSON
            contents (also known as JWT claims) cannot be altered by the client
            or a malicious party. For example, when you sign in with Google,
            Google issues a JWT which contains the following claims / JSON
            payload:
            <br />
            <b>How it work:</b>
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
            <br />
            User sign-in using username and password or google/facebook.
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. User's Client
            uses the JWT to access protected resources by passing the JWT in
            HTTP Authorization header. Resource server then verifies the
            authenticity of the token using the secret salt/ public key.
            <br />
            Security Just like any other authentication mechanism, JWT also has
            its own pros and cons. Must use HTTPS to secure the Authorization
            headers. Validate algorithm name explicitly. Do not completely rely
            on the algorithm mentioned in the header of JWT. There are a few
            known attacks based on the header like algo none attack, header
            stripping. Revoking the session of a user from backend server is
            difficult. Since a JWT is set to automatically expire, If an
            attacker gets the token before it expires It leads to various
            exploits. Building a token revocation list on your server to
            invalidate tokens could be best way to mitigate. If JWT is persisted
            on cookies, we need to create HttpOnly cookie. This will restrict
            third party javascripts from reading jwt token from cookie.
            XSS - backend servers must always sanitize user generated data. CSRF
             -  If JWT in persisted on cookies, CSRF attacks are possible. We
            can mitigate CSRF by using origin of request and special request
            headers.
            <br />
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:3. What is the difference between javascript and NodeJS?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <div className="card-text">
            <b> JavaScript:</b>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
            <br />
            <p>
              1. Javascript is a programming language that is used for writing
              scripts on the website.
            </p>
            <p>2. Javascript can only be run in the browsers. </p>
            <p>3. It is basically used on the client-side. </p>
            <p>
              4. Javascript is capable enough to add HTML and play with the DOM.
            </p>
            <p>5. Javascript is used in frontend development. </p>
            <br />
            <b>NodeJS:</b>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
            <br />
            <p>
              1. We can run Javascript outside the browser with the help of
              NodeJS.
            </p>
            <p>2. It is mostly used on the server-side.</p>
            <p>3. Nodejs does not have capability to add HTML tags.</p>
            <p>
              4. V8 is the Javascript engine inside of node.js that parses and
              runs Javascript.
            </p>
            <p>5. Nodejs is used in server-side development.</p>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:4. How does NodeJS handle multiple requests at the same time?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>NodeJS handle multiple request:</b>
            Node.js is an open-source, cross-platform JavaScript runtime
            environment and library for running web applications outside the
            client's browser. Ryan Dahl developed it in 2009, and its latest
            iteration, version 15.14, was released in April 2021. Developers use
            Node.js to create server-side web applications, and it is perfect
            for data-intensive applications since it uses an asynchronous,
            event-driven model. Now that we know what is Node, let's look at why
            it is so prevalent in web development.
            <br />
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
