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
## References:

- https://medium.com/@alex_lobera/introduction-to-react-3000e9cbcd26#:~:text=React%20is%20a%20JavaScript%20library,efficient%20way%20using%20declarative%20code.
- https://levelup.gitconnected.com/why-react-is-declarative-a300d1e930b7
- https://blog.logrocket.com/virtual-dom-react/
- https://aws.amazon.com/what-is/cdn/
- https://www.youtube.com/watch?v=IrHmpdORLu8
- And, can't ignore chatGPT
