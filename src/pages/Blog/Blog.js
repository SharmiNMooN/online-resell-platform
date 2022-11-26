const Blog = () => {
  document.title = "Blog";

  return (
    <div className="container bg-light  mt-4 ">
      <div className="card mb-3">
        <div className="card-header">
          <b>
            Q:1. What are the different ways to manage a state in a React
            application?
          </b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <b>The Four Kinds of React State to Manage:</b>
          <p className="card-text">
            There are four main types of state you need to properly manage in
            your React apps:
          </p>
          <p>
            1. Local (UI) state – Local state is data we manage in one or
            another component. Local state is most often managed in React using
            the useState hook. For example, local state would be needed to show
            or hide a modal component or to track values for a form component,
            such as form submission, when the form is disabled and the values of
            a form’s inputs.
          </p>
          <p>
            2. Global (UI) state – Global state is data we manage across
            multiple components. Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at
            least. A common example of global state is authenticated user state.
            If a user is logged into our app, it is necessary to get and change
            their data throughout our application. Sometimes state we think
            should be local might become global.
          </p>
          <p>
            3. Server state – Data that comes from an external server that must
            be integrated with our UI state. Server state is a simple concept,
            but can be hard to manage alongside all of our local and global UI
            state. There are several pieces of state that must be managed every
            time you fetch or update data from an external server, including
            loading and error state. Fortunately there are tools such as SWR and
            React Query that make managing server state much easier.
          </p>
          <p>
            4. URL state – Data that exists on our URLs, including the pathname
            and query parameters. URL state is often missing as a category of
            state, but it is an important one. In many cases, a lot of major
            parts of our application rely upon accessing URL state. Try to
            imagine building a blog without being able to fetch a post based off
            of its slug or id that is located in the URL! There are undoubtedly
            more pieces of state that we could identify, but these are the major
            categories worth focusing on for most applications you build.
          </p>

          <b>Q:2. How does prototypical inheritance work?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>Prototypal Inheritance:</b>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            <br />
            <b>How it work:</b>
            The prototype property of an object is used to specify the object
            from which it inherits. In the above example, the prototype property
            of the obj object is not specified. Therefore, it inherits from the
            root object. It is possible to override the prototype property of an
            object. For example:
            {/* var obj = {
 name: "John",
 age: 30
// }; 

obj.prototype.age = 40; */}
            In this case, the prototype property of the obj object is set to an
            object with a single property, age, which has a value of 40.
            Therefore, the obj object now inherits from this object, and its age
            property is set to 40.
            <br />
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:3. What is a unit test? Why should we write unit tests?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <div className="card-text">
            <b> Unit Test:</b>
            A unit test verifies the behavior of a unit of software in the
            system. It verifies whether a small and isolated piece of the
            codebase called “unit” behaves as the developer intended. Unit tests
            verify the smallest parts or components of an application by
            comparing their actual behavior with the expected behavior in
            complete isolation. Here, “complete isolation” means that, during
            unit testing, devs do not connect the application with external
            dependencies such as databases, the filesystem, or HTTP services.
            This allows unit tests to be fast and stable since they won’t fail
            due to problems integrating with those external services.
            <br />
            <b>Why Write Unit Tests?</b>
            <p>
              Usually, developers write unit tests first, then write the
              software code. This approach is known as test-driven development
              (TDD). In TDD, the requirements are turned into specific test
              cases, then the software is improved to pass the new tests. In the
              case of unit tests, it allows for the modification of code without
              affecting the functionality of other units or the software in its
              entirety. This makes the job easier for developers as the bugs are
              easy to locate at this stage, which saves time and money. Also,
              within unit test environments, the individual modules of a product
              become isolated from one another and have their own area of
              responsibility. In this scenario, tests are more reliable because
              they are run in a contained environment. The code too, because of
              said reliability, becomes reliable. Along with the above facts,
              let’s explore the various benefits of unit tests.
            </p>
            <p>
              Benefits of Unit Tests: Unit tests help to find and fix bugs
              quickly and easily. Unit tests contribute to higher code quality.
              Unit tests contribute to better application architecture. Unit
              tests act as documentation. The main advantage of unit tests is
              their laser-sharp focus. Since they test a single function, they
              give precise feedback. If a unit test fails, then in the vast
              majority of cases testers can be sure that the specific function
              being tested is the problem. Unit tests are also known for their
              speed. Since they’re fast, they’re executed more often, making
              them a source of nearly constant valuable feedback.
            </p>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:4.React vs. Angular vs. Vue?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>React:</b>
            <br />
            The library is only concerned with UI components.It is a JavaScript
            library, it utilizes a JSX approach for development. MVC design
            requires Flux to implement, but it provides you more flexibility in
            how you wish to organise your code.
            <br />
            <p>
              One-way data binding means that a UI element can’t affect a
              component’s state.TypeScript can write JavaScript XML (JSX),
              although it isn’t included by default.Material-UI Library &
              Dependencies – Community-developed UI tools provide a wide range
              of UI components. React does not fully enable dependency injection
              because each component has its own global state.Virtual DOM –
              anytime the DOM changes, a new virtual DOM is created, compared to
              the previous one, and only the differences are modified in the
              “real” DOM.
            </p>
            <br />
            <b>Angular:</b>
            <br />
            <p>
              Full-featured Framework – provides a strong opinion on how your
              application should be designed, as well as a number of tiny
              libraries that aid in the development of complex applications.
            </p>
            <br />
            <p>
              Supports both one way and two way data binding ,two-way data
              binding means that if we modify the UI input, the model state will
              change, and vice versa.TypeScript is a statically typed language
              that is a superset of JavaScript.Material Design Components –
              Angular includes a number of material design components that make
              UI configuration a breeze.Dependency injection is supported,
              allowing for separate life cycles for different stores.Incremental
              DOM – when a new DOM is created, it compares it to the previous
              one and applies the differences to the “actual” DOM, only
              allocating memory if necessary.
            </p>
            <br />
            <b>Vue.js:</b>
            <br />
            <p>
              Vue.js is a library that allows you to create interactive web
              interfaces. Vue.js is primarily concerned with the ViewModel layer
              of the MVVM architecture. It uses two-way data bindings to attach
              the View and the Model. Directives and Filters abstract away the
              actual DOM operations and output formatting.
            </p>
            <br />
            <p>
              It was released in February 2014.It is used to develop web-based
              applications.It is faster and smoother.It is backed by Laravel and
              Alibaba. In Vue, State Management Library is called VueX.Used by
              Alibaba, GitLab, Trustpilot, etc.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
