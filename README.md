## Request Response cycle

1.  Validate data contained in the request ------>**Pipe**
2.  Make sure user is authenticated ------------->**Guard**
3.  Route the request to a particular function -->**Controller**
4.  Run some business logic ---------------------->**Service**
5.  Access a database ----------------------------->**Repository**

---

## Parts of nestjs

1. **Controllers** Handles incoming requests.
2. **Service** Handles data access and business logic.
3. **Modules** Groups together code.
4. **Pipes** Validate incoming data.
5. **Filters** Handles errors that occur during request handling.
6. **Guards** Handles authentication.
7. **Interceptors** Adds extra logic to incoming requests or outgoing responses.
8. **Repository** handles data stored in DB.

---

## Generating things

1. module `nest g module users` .
2. controller `nest g controller users`.
3. service `nest g service users`.

---
