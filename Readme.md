# Palm Outsource Backend task

## To run this project follow these steps

- Clone this repo
- Run the following command in the terminal `cd palm-outsource-task-backend`
- Then run `yarn`
- Create a .env file in the root directory of the application
- Add `PORT=8000` to the .env file
- Then `npx prisma init --datasource-provider mongodb --output ../generated/prisma`
- Got to the env file and add a working mongoDB Atlas cluster with a DB in it
- Add the connection string to the env file `DATABASE_URL`
- Run `npx prisma generate`
- Run `npx prisma db push`
- You can now add and fetch Moods and exercises through Postman or Thunder Clients through the following collections
- [Mood Collection]("/Docs/Mood CRUD.postman_collection.json")
- [Exercise Collection]("/Docs/Exercise CRUD.postman_collection.json")
- Kindly note that you need to add url to your local server port

---

## The stack used to build the client facing interface is:

- TypeScript
- Node.js
- Express
- MongoDB
- Prisma ORM

---
