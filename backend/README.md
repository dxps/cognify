## Cognify :: The back-end side

<br/>

### Setup

Being a Bun based project, you need to have [Bun](https://bun.sh/) installed.

-   Run `bun install` to install the project dependencies.
-   Run `docker compose up -d` to start the PostgreSQL database instance as a Docker container.
-   Create a `.env` file (see `.env.example` for more information).
-   Run `bun db:push` to provision (apply the changes to) the database.

Using `bun db:push` is a convenient method for quickly testing new schema designs or modifications in a local development environment, allowing for rapid iterations without the need to [manage migration](https://orm.drizzle.team/docs/kit-overview) files.

<br/>

### Usage

-   `bun dev` to start a development server.
