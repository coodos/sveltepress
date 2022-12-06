# Sveltepress

---

Amazingly crafted, flexible SvelteKit and Express.JS starter code which is enough to be the finisher code for others xD

## Running

-   You can use `./.env.sample` as a boiler to create your own environment config file (`./.env`).

And then with some docker compose magic, we are ready to roll!

```sh
$ docker-compose up
```

## Where to find stuff :)

| Service                              | Default URL                                      |
| ------------------------------------ | ------------------------------------------------ |
| Client (SvelteKit)                   | [localhost:5173](http://localhost:5173)          |
| Storybook (Svelte Component Library) | [localhost:6006](http://localhost:6006)          |
| REST API Server (Express JS)         | [localhost:4269](http://localhost:4269)          |
| REST API Docs (Swagger)              | [localhost:4269](http://localhost:4269/api/docs) |
| Server Metrics (Grafana)             | [localhost:1337](http://localhost:1337)          |

## Project Structure

-   Sveltepress is separated into 2 Yarn Workspaces, the client and the server.
-   The Client is the SvelteKit Front-End with Storybook setup to view and interact with UI Library components.
    -   The `./client/src/lib` folder holds all the UI components, helper functions, configs etc.
    -   The `./client/src/routes` folder is used by SvelteKit to serve the pages on the mapped routes.
-   The REST API Server is the Express.JS server with monitoring setup using Prometheus && Grafana && also Swagger API Docs which can be accessed via `http://<Server IP>:<Server Port>/api/docs`.
    -   The `./server/src/config` folder handles usage of environment variables in the server and setting up of connection to the PostgreSQL DB.
    -   The `./server/src/controllers` folder is where the business logic of the app handles.
    -   The `./server/src/middleware` folder is where the requests and responses of the server a processed before sending to client.
    -   The `./server/src/models` folder is where the tables to be used in the DB are setup.
    -   The `./server/src/routers` folder is where the routes of the server are defined.
    -   The `./server/src/services` folder is where the DB operations have been abstracted to allow for complete modularity and easy switching of DB if need be.
    -   The `./server/src/utils` folder is where the helper functions are stored.
    -   The `./server/src/validators` folder is where the validators are stored.
