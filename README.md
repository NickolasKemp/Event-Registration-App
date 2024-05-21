## Run Locally

Clone the project

```bash
  git clone https://github.com/NickolasKemp/Event-Registration-App.git
```

Install dependencies from root directory (if you do not have pnpm package manager, install it with `npm install -g pnpm`)

```bash
  pnpm install:all
```

Up database

```bash
  docker compose -f docker-compose.dev.yaml --env-file=.env.dev up -d
```

Generate prisma client and seed data

```bash
  pnpm prisma:backend
```

Start the backend server and frontend servers

```bash
  pnpm start:all
```

