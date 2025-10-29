## The Web UI

...

This project was created using `bun init` in [Bun v1.3.1](https://bun.com), using React/Shadcn+TailwindCSS template.

<br/>

### Setup

Being a Bun based project, you need to have [Bun](https://bun.sh/) installed.<br/>

-   Run `bun install` to install the project dependencies.
-   Run `docker compose up -d` to start the PostgreSQL database instance as a Docker container.
-   Create a `.env` file (see `.env.example` for more information).

Additionally, you can apply the changes to the database by running `bun db:push`.<br/>
This is a convenient method for quickly testing new schema designs or modifications in a local development environment, allowing for rapid iterations without the need to [manage migration](https://orm.drizzle.team/docs/kit-overview) files.

<br/>

### Usage

-   `bun dev` to start a development server.
-   `bun start` to run for production.
