
1.What are the main benefits of using JWT for authentication?
The main benefits of using JWT for authentication is for security when authenticate login or log out and performance efficiently.

2.Where should you store your JWT secret and why?
JWT secret I should stored on .env to secure safety.

3.Why is it important to hash passwords even if the system is protected with JWT?
It is important to hash passwords because JWT only protects the communication and session management part of authentication.

4.What might happen if a protected route does not check the JWT?
If a protected route does not check the JWT, unauthorized users may access sensitive data or perform actions that should only be allowed for authenticated users.

5.How does Swagger help frontend developers or API consumers?
Swagger provides clear, interactive API documentation. It helps frontend developers and API consumers understand available endpoints, required parameters, response formats, and authentication requirements. Swagger also allows developers to test API endpoints directly within the documentation, improving development speed, collaboration, and reducing misunderstandings.

6.What tradeoffs come with using token expiration (e.g., 1 hour)?
Using token expiration improves security because it limits how long a stolen token can be misused.
