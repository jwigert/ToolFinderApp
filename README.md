# Tool finder app

This is a simple Angular frontend that lists available tools for a given operation.

![README](README.gif)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Environment variables

To be able to execute the application, a couple of environment variables need to be set. Copy `src/environments/environment.ts.example` to `src/environments/environment.ts` and set the necessary environment variables.

## Development server

In case of the following error: `Watchpack Error (watcher): Error: ENOSPC: System limit for number of file watchers reached, watch './node_modules/typescript'`

Resolve by running:

```bash
sudo sysctl -w fs.inotify.max_user_watches=524288
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run a specific test:

```bash
ng test --include src/app/operations/sort.pipe.spec.ts
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
