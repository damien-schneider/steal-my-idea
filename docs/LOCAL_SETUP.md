# How to setup your local dev environment?

## 🍏 Node version

The version of Node used by the project is described in the `.nvmrc` file. 

```bash
nvm install # If necessary
nvm use
```

## ⚡ Supabase

When using Supabase, you will need a **remote project** and a **local project**. Local development will be carried out on your local project and you can sync up with your remote project whenever you need.

> ℹ️ You will almost always only need to deal with the local project.

📙 Mandatory reading: [How to use Supabase on your local development machine.](https://supabase.com/docs/guides/cli/local-development)

### General rules of thumb

- Give database migrations explicit names. For example `create_users_table` or `add_email_to_users_table`.
- DO NOT edit previous migrations. Instead, create a new migration to modify the database schema.
- When developing locally, make sure to run `npx supabase reset` to work with the latest changes.
- Make sure to provide appropriate seed data in `supabase/seed.sql` for other contributors to work with your new changes.

### Remote project

1. Create a Supabase account if you don't have one yet.
2. Create a new project called `Steal my idea` and follow instructions.
3. Don't create anything yet! The magic works through  pushing local changes to the remote project.

### Local project

The Supabase CLI is already part of the dev dependencies. Just in case, you can run `pnpm install`.

1. Run `npx supabase login` and follow instructions.
2. Run `npx supabase init` and follow instructions.
3. Run `npx supabase start` and follow instructions.
4. Access your local Supabase studio at [http://localhost:54323](http://localhost:54323).

### How to update the database schema?

All updates on the database schema must be done through [Database migrations](https://supabase.com/docs/guides/cli/local-development#database-migrations).

### How to sync with your remote project?

[Deploy your project](https://supabase.com/docs/guides/cli/local-development#deploy-your-project)
