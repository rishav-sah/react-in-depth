## React Interview Questions

It contains potential questions which are essential for coding interview.

1. ### What is `Emmet`?
    Emmet is an efficient toolkit for web developers which provides a shorthand syntax of for writing HTMl and CSS. It accelerates the process of writing code by enabling developers to write code quickly with fewer keystrokes.

    Input

    ```html
    header.nav-bar>nav.nav-bar__menu>ul.nav-bar__menu-list>li.nav-bar__menu-item$*5
    ```

    Output

    ```html
      <header class="nav-bar">
        <nav class="nav-bar__menu">
          <ul class="nav-bar__menu-list">
            <li class="nav-bar__menu-item1"></li>
            <li class="nav-bar__menu-item2"></li>
            <li class="nav-bar__menu-item3"></li>
            <li class="nav-bar__menu-item4"></li>
            <li class="nav-bar__menu-item5"></li>
          </ul>
        </nav>
      </header>
    ```
2. ### What is `React`?
    React or React.js is an **open-source javascript library** created by **facebook** that is used for building user interfaces. It enables the developers to create dynamic and interactive web applications in a declarative approach by efficiently managing and updating the UI components.

3. ### Explain the differences between `imperative` and `declarative` approaches in UI development, and how they manifest in React development.
    The imperative and declarative approaches are the two fundamental programming paradigms used in computer science to solve problems and express computations. They represent different ways of expressing the logic and behavior of an application, each with its strengths and weaknesses.

    In React, the imperative and declarative approaches manifest in how you write your components and manage the UI.

    #### Imperative Approach
    In the imperative approach, we explicitly define the steps to update the UI based on changes in state or props. This typically involves using imperative statements to directly manipulate the DOM (Document Object Model) or React elements to achieve the desired UI changes.

    ```jsx
    import React, { useState } from 'react';
      const CounterComponent = () => {
      const [count, setCount] = useState(0);

      const increment = () => {
        // Direct DOM manipulation (imperative)
        document.getElementById('counter-display').innerText = count + 1;
      };

      return (
        <div>
          <button onClick={increment}>Increment</button>
          <span id="counter-display">{count}</span>
        </div>
      );
    };
   ```
    In this example, the increment function is called when the button is clicked. It uses setCount to update the state and then directly manipulates the DOM by using getElementById and innerText to update the counter display. This is an imperative approach as it specifies exactly "how" the UI should be updated.

    #### Declarative Approach
    In the declarative approach, we describe "what" the UI should look like based on the current state and props, and React takes care of updating the actual DOM to match that description. React provides a virtual DOM that it uses to efficiently update the real DOM, abstracting away the imperative DOM manipulation.

    ```jsx
    import React, { useState } from 'react';
      const Counter = () => {
      const [count, setCount] = useState(0);

      const increment = () => {
        setCount(count + 1);
      };

      return (
        <div>
          <button onClick={increment}>Increment</button>
          { /* Declarative rendering */ }
          <span>{count}</span>
        </div>
      );
    };
   ```

4. ### Explain the differences between `Library and Framework`?
    Both frameworks and libraries are pre-coded support programs used to develop complex software applications and aim to simplify and streamline the development process, but they do so in distinct ways. Yet, library focuses on the view layer and allows developers more control and flexibility in how they structure their applications. Frameworks, on the other hand, provide a more structured and opinionated approach, dictating how the entire application should be built and organized.

    | Aspect                   | Library (React)             | Framework (e.g., Angular)              |
    |--------------------------|-----------------------------|----------------------------------------|
    | Inversion of Control     | Developer has more control  | Framework controls application flow    |
    | Comprehensive vs. Focused| Focused on view layer       | Covers multiple aspects of an app      |
    | Control Flow             | Developer determines flow   | Framework dictates control flow        |
    | Flexibility              | More flexible integration   | Less flexible due to prescribed rules  |
    | Learning Curve           | Generally lower             | Tends to have a steeper learning curve |

4. ### Why did React come into effect despite the presence of JavaScript?
    React's efficient Virtual DOM, component-based architecture, declarative syntax, strong community and ecosystem support, and focus on performance have all contributed to its popularity and adoption, making it a preferred choice for front-end web development despite the presence of JavaScript and other frameworks.
    
6. ### What is a `CDN`? What are its contributions to web development, and what factors have contributed to its popularity?
    A CDN, or Content Delivery Network, is a network of distributed servers strategically placed across different geographical locations to deliver web content more efficiently to users. Its primary goal is to improve the performance, reliability, and availability of web services and content for end-users. When a user requests to access a website or web application that utilizes a CDN, the content is served from the closest server location, rather than from the website's original hosting server. This proximity reduces latency and ensures faster content delivery.

    #### Contributions of CDN to Web Development
    The contributions of CDN to web development are significant and have had a transformative impact on the way websites and web applications are designed and delivered. Some of the key contributions are:

    - **Improved Website Speed and Performance**: By caching and serving content from geographically distributed servers, CDNs significantly reduce the time it takes to load web pages. This results in faster website performance, reduced load times, and a better user experience.

    - **Reduced Latency**: CDNs store copies of content closer to end-users, reducing the physical distance data has to travel. This minimizes latency and ensures quicker data retrieval, especially for users located far from the original server.
    
    - **High Availability and Redundancy**: CDNs employ multiple server locations, which provide redundancy. If one server goes down or becomes unreachable, the CDN can route requests to other available servers, ensuring high availability of the content.

    - **Traffic Offloading**: By distributing the load across multiple servers, CDNs help reduce the burden on the origin server. This is particularly beneficial for websites that experience high traffic or sudden spikes in visitors, as the CDN can handle a significant portion of the requests.
    
    - **Security Enhancements**: Some CDN providers offer security features like DDoS protection, web application firewalls, and SSL termination, safeguarding websites from various online threats and attacks.
    - **Scalability**: CDNs are designed to scale easily, making it more manageable for websites to handle increasing traffic and demand without the need for extensive infrastructure upgrades.

    #### Factors contributing to CDN Popularity

    Several factors have contributed to the popularity of CDNs:

    - **Global Internet Usage**: As the internet has become more widespread, users expect faster and more reliable access to websites and content from anywhere in the world. CDNs address this need by bringing content closer to users.

    - **Mobile Device Proliferation**: With the rise of mobile devices, delivering content efficiently to users on various devices and networks has become crucial. CDNs help optimize content delivery for different devices and screen sizes.

    - **Rich Media Content**: Modern websites often contain rich media elements such as images, videos, and interactive features. CDNs excel at delivering such content quickly, providing a better user experience.

    - **E-commerce and Online Media**: The growth of e-commerce and online media platforms has increased the demand for faster content delivery. CDNs enable these platforms to handle large volumes of traffic effectively.

    - **SEO and Search Engine Ranking**: Website speed and performance are essential factors in search engine rankings. CDNs help improve load times, positively influencing SEO efforts.

    - **Cost-Effectiveness**: While setting up and maintaining a CDN may incur costs, the benefits in terms of improved performance and reduced server load often outweigh the expenses.

    In conclusion, CDNs have become an integral part of web development, providing numerous benefits to websites, web applications, and their users. Their ability to improve speed, reduce latency, enhance availability, and handle traffic spikes has contributed to their widespread adoption and popularity in the modern internet landscape.

7. ### Explain the differences between `react.development.js` and `react.production.js` files via CDN.
    **Development** and **Production** files refer to two different sets of files that are used to serve web content to users. While **development files** are useful for development and debugging purposes, they are not optimized for efficient delivery to end-users. They often contain unnecessary whitespace, comments, and larger file sizes, making them slower to load and consume more bandwidth. **Production files**, on the other hand, are optimized versions of the web assets meant for deployment on a live website or application. In summary, **development files** are used during the development phase for ease of debugging and modification, while **production files** are optimized and deployed on CDNs to deliver the website or application efficiently to end-users.
    
8. ### What is `crossorigin` in script tag?
    The crossorigin attribute in the HTML `<script>` tag is used to control how the browser handles loading external scripts from different domains. It can have three values: `anonymous` (default, no credentials sent), `use-credentials` (sends credentials), or omitted (same as anonymous). It's used for security reasons, especially when loading scripts from Content Delivery Networks (CDNs) or third-party sources.
    
    It's important to note that the crossorigin attribute only applies to scripts loaded from external sources using the `<script>` tag. It does not apply to inline scripts (scripts written directly within the HTML document), as they are assumed to be from the same origin as the hosting page. The attribute is a security feature that helps prevent certain types of attacks, such as cross-site scripting (XSS) or unauthorized access to sensitive data. When using external scripts, it's good practice to include the appropriate crossorigin value based on the script's requirements and the security needs of your application.
    
9. ### Explain the differences between `React and ReactDOM`.
    React and ReactDOM are both essential parts of the React ecosystem fulfilling different purposes when building web application. React focuses on the logic of building components and managing their state, providing a foundation for creating interactive and dynamic user interfaces.

    React is the core library that handles component logic and state management, while react-dom is a specific package that handles interactions with the DOM, allowing React to render and update components on web pages and other compatible environments. When building web applications, you typically need both React and react-dom to work together seamlessly. However, if you are using React for other platforms like mobile (React Native), you may use alternative packages like "react-native" instead of "react-dom" for rendering components on those platforms.

10. ### Explain `async and defer` attributes in the script tag.
    Both **async** and **defer** attributes in the `<script>` tag loads the script asynchronously. However, the **async** attribute allows the webpage to continue loading while the script it fetched without waiting for the HTML parsing to complete where order of execution is not guranteed. **defer**, on the other hand, defers its execution until after the HTML parsing is complete. Scripts are executed in the order they appear in the document, just before the `DOMContentLoaded` event. Order of execution is guaranteed.

    Both **async** and **defer** attributes can improve the performance of your web page by allowing the browser to load and execute external scripts in a non-blocking manner. Use **async** for independent scripts and **defer** for scripts that rely on the DOM or other scripts but can wait until the DOM is fully parsed.

11. ### Explain the differences between `git` and `github`?
    Git is a distributed version control system (VCS) which is widely used by the software developers to track the changes in the source code. It provides features such as efficient collaboration, manage complex projects, and roll back changes if necessary all while maintaining a detailed history of the project's evolution.

    GitHub is a Git hosting service that enables developers to store and manage their Git repositories. With a user-friendly web-based interface, it facilitates version control and collaborative software development. GitHub is widely embraced within the developer community, where projects are showcased among peers and open for contributions through public repositories, primarily focusing on continuous enhancement.

    The above definitions are the basic idea for the terminologies. Please explore in detail for the advance features and functionalities because it can be only understood when it is practically implemented.

12. ### What is `npm`?
    npm is a package manager for the javascript ecosystem that allows developers to easily manage and share code libraries, tools, and other dependencies that are essential for building JavaScript-based applications, whether for the web, server-side, or command-line interfaces. It is primarily associated with the Node.js (a runtime environment for executing javascript code outside of a web browser).

    #### Key features of `npm`

    - **Dependency Management**: npm helps developers manage the dependencies their project rely by automating the process by fetching and installing the required packages from the npm registry. It avoids the manual download, installation and maintenance of the dependencies.

    - **Package Installation**: The packages are installed using simple commands in the terminal. For example, `npm install some-package`.

    - **Package Publishing**: npm allows the developers to publish their own packages to the npm registry, making them available for others to use. This is espeially useful for sharing reuseable code and components with the broader developer community.

    - **Version Control**: npm allows specifying versions of dependencies to ensure consistency acroess different environments. We can specify exact versions, ranges, or use semantic versioning to define compatibility and updates for your project.

    - **Scripts**: npm provides a way to define custom scripts in a project's package.json file. These scripts can be used to automate various tasks, such as building (dev or prod), testing and running of the application.

    - **Global vs. Local Installation**: npm supports both global and local installation of packages. Global packages are installed system-wide and can be accessed from the command line, while local packages are installed in your project's directory and are specific to that project.

    - **Semantic Versioning**: npm uses semantic versioning (SemVer) to indicate how compatible a package version is with other versions. Semantic versioning consists of three numbers separated by dots (e.g., 1.2.3), representing major, minor, and patch versions. Changes in each part of the version number indicate different levels of compatibility and updates.

    - **Lock Files**: npm generates lock files (such as package-lock.json) that record the exact versions of dependencies installed. This ensures that the same package versions are used across different environments and during subsequent installations.

13. ### Explain the differences between `package.json` and `package-lock.json`?
    package.json is a metadata file in JavaScript projects that describes project details, dependencies, and scripts. It lists dependencies with version ranges and allows running custom tasks. package-lock.json is an automatically generated file that locks down specific dependency versions for consistency across installations, preventing unexpected changes. It includes integrity checks and ensures version reproducibility, enhancing package management reliability.

14. ### Explain the differences between dependencies and devDependencies?
    Dependencies and devDependencies are two distinct categories of packages listed in the `package.json` file of a javascript project managed with npm.
    
    Dependencies are packages that our project relies on to run in a production environment when deployed. They include libraries, modules, or frameworks that our code directly uses when executed. Dependencies are typically required for the core functionality of our application and are essential for its proper operation. When we distribute or deploy our project, these dependencies need to be available and properly installed for our application to work correctly. Examples of dependencies might include server frameworks, utility libraries, and database connectors.

    To install a dependency, we use a command like:

    ```bash
    npm install dependency-name
    ```

    devDependencies, on the other hand, are packages that are only needed during development and testing of our project. They include tools, testing libraries, build scripts, and other resources that assist you in developing, testing, and maintaining your code but are not required for the final production version of your application. devDependencies are not included when your project is deployed or distributed, making your production environment leaner. Examples of devDependencies might include testing frameworks, linters, bundlers, and development server tools.

    To install a devDependency, you would use a command like:

    ```bash
    npm install --save-dev dev-dependency-name
    or
    npm install -D dev-dependency-name
    ```
15. ### What is tilde(~) & caret(^) in package.json dependencies version?
    tilde(~) and caret(^) are two symbols used to specify version ranges in package.json. Tilde(~) allows for patch updates, while caret(^) allows for both minor and patch updates. When deciding which one to use, consider your project’s requirements and use the most restrictive version range that meets those requirements.

16. ### What are `node_modules`? Is it good idea to push it on git?
    `node_modules` is a directory created by npm to store the dependencies that our project requires. Whenever we install npm package packages, it fetches them from the npm registry and places them in the `node_modules` directory. This directory contains all the code and files needed for the installed packages to work within our project.

    It is generally not a good idea to push the `node_modules` directory to the git repository because of its size, redundancy and version control issues. Yet, the project dependencies are specified in `package.json` file and can be installed it by running the command `npm install` by other developers which is the main purpose of a package manager. We must ignore the `node_modules` by putting it in the `.gitignore` file.

17. ### What is Parcel / Webpack? Why do we need it?
    `Parcel` or `Webpack` are javascript module bundlers. A modern web development tool that helps to organise and optimise large JavaScript codebases for web applications by combining into one file making it production-ready.

    We need module bundlers for serving several essential purposes. They bundle diverse assets, like JavaScript and stylesheets, into optimized files to reduce HTTP requests and enhance page loading. They facilitate the use of advanced JavaScript features by transpiling code to compatible versions. These tools support modular development, allowing code to be organized into reusable modules and handling dependencies. Additionally, they optimize assets for production through techniques like minification, compression, and code splitting, ensuring a responsive and efficient user experience. In conclusion, Parcel and Webpack are indispensable for managing assets, optimizing performance, and streamlining the development process in web applications, with the choice between them influenced by project complexity and preferences.

18. ### What is `.parcel-cache` directory in the application when using `parcel` bundler?
    The `.parcel-cache` directory is created by the parcel bundler when it processes and builds your application. It is used to store cached data and intermediate files to improve the speed and efficiency of subsequent builds.

19. ### How Parcel knows about its dependencies when preparing build?
    Parcel identifies and manages dependencies during the build process by analyzing import statements and entry files. It creates a dependency graph that outlines how different modules and assets are connected. Parcel then resolves module paths, bundles assets, and performs optimizations based on this graph. Dynamic imports and code splitting are supported for efficient loading. Results are cached to speed up future builds. Overall, Parcel automatically handles dependencies and builds optimized bundles for web applications based on the code's structure and references.

20. ### What is the `dist` directory in the project?
    The `dist` directory within a project contains the optimized and transformed output files intended for deployment or distribution. It typically holds bundled and minified JavaScript, optimized stylesheets, HTML files, images, fonts, and other assets required for the application to run efficiently in a production environment. The `dist` directory marks the end result of a build process, where source code and assets have undergone various transformations to enhance performance, reduce file sizes, and ensure proper paths and configurations. This separation ensures that the deployed application is well-organized, responsive, and ready for use by end-users.

21. ### What is `browserlist`?
    `browserslist` is a configuration and query syntax used in web development to specify the range of browser versions your code should support. It's employed by tools like Autoprefixer and Babel to generate code compatible with chosen browsers. By setting guidelines for targeted browser versions, `browserslist` ensures that the generated code includes necessary transformations, like polyfills and transpilation, to maintain cross-browser compatibility. Its flexible syntax allows you to define specific versions, browser families, or usage statistics, helping balance support for different user bases and modern web technologies.

    ```javascript
     "browserslist": [
      "defaults and supports es6-module",
      "maintained node versions"
    ]
    ```

22. ### What is `npx`?
    `npx` is a command-line tool that comes with `npm` and lets you run Node.js packages and executables directly from the command line. It's especially useful for running packages without the need for global installations or adding them to your project dependencies. `npx` fetches and executes the latest version of a package, or you can specify a version if needed. This tool streamlines the execution of commands and scripts from npm packages, making it convenient for quick tasks, testing, and running tools without permanent installations.

    ```bash
    npx create-react-app app-name
    ```

## References:

- https://medium.com/@alex_lobera/introduction-to-react-3000e9cbcd26#:~:text=React%20is%20a%20JavaScript%20library,efficient%20way%20using%20declarative%20code.
- https://levelup.gitconnected.com/why-react-is-declarative-a300d1e930b7
- https://blog.logrocket.com/virtual-dom-react/
- https://aws.amazon.com/what-is/cdn/
- https://www.youtube.com/watch?v=IrHmpdORLu8
- https://www.atatus.com/blog/package-json-vs-package-lock-json/
- https://browsersl.ist/
- ChatGPT


