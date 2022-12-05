# Sveltepress
![Sveltepress Banner](assets/banner.png)
***
Amazingly crafted, flexible Sveltekit and Express.JS starter code with passport stuff integrated :)

## Running
- You can use `./.env.sample` as a boiler to create your own environment config file (`./.env`).
- You can use Docker to run the project with all it's features.
- | Service | Default Port |
  |---|---|
  |Client (SvelteKit)|5173|
  |Storybook (Svelte Component Library)|6006|
  |REST API Server (Express.JS with Swagger Docs) |4269|
  |Server Metrics (Grafana)|1337|
  |Database (PostgreSQL)|5432|

## Project Structure
- Sveltepress is separated into 2 Yarn Workspaces, the client and the server.
- The Client is the SvelteKit Front-End with Storybook setup to view and interact with UI Library components.
  - The `./client/src/lib` folder holds all the UI components, helper functions, configs etc.
  - The `./client/src/routes` folder is used by SvelteKit to serve the pages on the mapped routes.
- The REST API Server is the Express.JS server with monitoring setup using Prometheus && Grafana && also Swagger API Docs which can be accessed via `http://<Server IP>:<Server Port>/api/docs`.
  - The `./server/src/config` folder handles usage of environment variables in the server and setting up of connection to the PostgreSQL DB.
  - The `./server/src/controllers` folder is where the business logic of the app handles.
  - The `./server/src/middleware` folder is where the requests and responses of the server a processed before sending to client.
  - The `./server/src/models` folder is where the tables to be used in the DB are setup.
  - The `./server/src/routers` folder is where the routes of the server are defined.
  - The `./server/src/services` folder is where the DB operations have been abstracted to allow for complete modularity and easy switching of DB if need be.
  - The `./server/src/utils` folder is where the helper functions are stored.
  - The `./server/src/validators` folder is where the validators are stored.
