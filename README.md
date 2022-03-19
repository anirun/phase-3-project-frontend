## Core Deliverables

As a user:
1. When the app starts, I can choose to view as a Teacher or as a Student.
2. When viewing as a Teacher, I can see all the assignments I have assigned to students, in order of assignment.
3. As a Teacher, I can grade assignments.
4. As a Student, I can mark my assignment as complete, view my grades and gpa.
5. In either view, I can filter assignments by un/completed and un/graded.

## Endpoints

The base URL for my backend is: `http://localhost:9292`

- Decide on your API endpoints. What data should they return? What kind of CRUD action should they perform? What data do they need from the client?

### Fetch Example

Your React app should make fetch requests to your Sinatra backend! Here's an
example:

```js
fetch("http://localhost:9292/test")
  .then((r) => r.json())
  .then((data) => console.log(data));
```

## Developer Notes

- Use [Postman][postman download] to test your endpoints.