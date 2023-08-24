# Steal My Idea

Visit the website : [Steal My Idea](https://steal-my-idea.today/)

We always have ideas we never have time to develop. This is a place to share them and maybe someone will steal them and make them real.
It is also a place to find ideas to work on if you are looking for one.

## Open Source

This project is open source and you are welcome to contribute. If you want to contribute, we will implement soon helpers to understand easily the project structure and how to contribute.

# Roadmap

## Features

### Easy

- [ ] Improve style of the close button in the idea modal
- [ ] Improve documentation for contributation (This Readme.md)
  - [ ] Add a summary
  - [ ] Add preview Image of the site
  - [ ] Add Emoji
- [ ] Improve post-it Idea style
- [ ] Update the Favicon
- [x] Update the title and others metadata of the html page

### Medium

- [ ] Add a possibility to exit the add idea modal by clicking outside
- [ ] Add dark mode
- [ ] Add a context menu on the post-it to report an idea (only the front with a variable set to false (I will implement it in the database just after it is done))

### Hard

- [ ] Add a multi selection for the categories (just in the form selection because it is already implemented in the data structure and the insert function)
- [ ] Improve the repartition of the post-it on the screen (maybe with a grid, to discuss)
- [ ] Add filter by Category to load only ideas of the selected filters

## Bugs / Improvements

### Easy

- [ ] Fix button position on mobile
- [ ] Refactor the code in AddIdeas.tsx

### Medium

- [ ] Make the background idea panel move with the post-it
- [ ] Fix modal position on mobile (because it is overflow-hidden now, the modal is sometimes not visible on the top of the screen)

### Hard

# How to contribute

### Technologies used

- React
  [React documentation](https://reactjs.org/docs/getting-started.html)
- Typescript
  [Typescript documentation](https://www.typescriptlang.org/docs/)
- Tailwind CSS
  [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Pnpm
  [Pnpm documentation](https://pnpm.io/)
- Vite
  [Vite documentation](https://vitejs.dev/guide/)
- Supabase
  [Supabase documentation](https://supabase.io/docs/)
- Shadcn-ui
  [Shadcn-ui documentation](https://shadcn-ui.vercel.app/)
  Command to add a component : `npx shadcn-ui@latest add button`

### Install the project

- Clone the dev branch of the project
- Run `pnpm install` to install the dependencies
- Run `pnpm dev` to start the project
- See the Roadmap to find a feature to implement or a bug to fix
- Create a branch with the name of the feature you want to implement or the bug you want to fix
- Create a pull request to merge your branch into the dev branch
- Wait for the review of your pull request

### Development guidelines

- [How to setup your local dev environment?](docs/LOCAL_SETUP.md)

With Vite :

- Press `o` to open the project in your browser
- Press `r` to restart the project server easily
