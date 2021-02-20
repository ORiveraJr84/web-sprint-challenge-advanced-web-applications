# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.
   A token is basically used as a shortcut. It confirms that you've already been authenticated to access the requested data by already having already provided valid credentials during that session.

2. What steps can you take in your web apps to keep your data secure?
   Always require authentication for any section that may contain sensitive information, limit token lifespans, and never place sensitive information in the client side body of a site.

3. Describe how web servers work.
   Servers receive various types of requests and serve up the information accordingly. Under normal circumstances of viewing a website, a get request is proceesed and the website is displayed. If more information or data is needed, additional requests, such as put, post, or delete, must be made oftentimes requiring additional information be sent with the request.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
   Get, post, put, and delete are some of the most common request types. CRUD stands for CReate, Update, and Delete. Depending on the operation needed, then a different request type is required.
