# Vue3 Boilerplate

Here is a starting place for creating a Vue3 App with all that stuff you like, like Vuex, Vuetify, TS and Okta login

## Quickstart
```sh
# Project setup
npm i

# build and hot-load
npm run dev

# compile and Minify for Production
npm run build

# lint
npm run lint
```

## Notes
* [Typescript and Vue3](https://vuejs.org/guide/typescript/overview.html)
* [Vuex and TS](https://vuex.vuejs.org/guide/typescript-support.html)
* [more in depth TS info here](https://blog.logrocket.com/how-to-use-vue-3-typescript/)
* [Okta and Vue3](https://stackoverflow.com/questions/70910754/how-to-set-up-a-vue-app-with-okta-auth-with-composition-api)
* [lint](https://eslint.org/)
* [Vite Configuration Reference](https://vitejs.dev/config/)
* For Vue3 it is recommended to disable Vetur and use VSCode extensions [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) and [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Okta Auth
Protected by [Okta OpenId authentication](https://developer.okta.com/docs/guides/sign-into-spa-redirect/vue/main/) to keep your secrets safe.

Auth is configured in config.json and can be accessed in the application by importing auth.ts

To protect a page, add the `requiresAuth` attribute to its route in `router/index`

## To-do
* scss
* lazy-loading in router/index.ts
* get knowing about CompositionAPI
* add Vuetify

## Done
* absolute component paths


## Type Support for `.vue` Imports in TS
If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

