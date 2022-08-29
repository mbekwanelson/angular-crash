# AngularCrash

##initial configs for CLI to run enable powershell scripts on Windows Client
run  `npm install -g @angular/cli` to install angular cli globally 
run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` if scripts are blocked or unauthorised on machine
run `npm i json-server` to install json-server. This will allow to place the db.json file contents on a remote server so the app will make requests to this remote server for database entries, instead of db.json file


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.
was updated using "ng update @angular/core@14 @angular/cli@14"

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
On a seperate terminal from the `ng serve` one - Run `npm run server` for mock db.json data to be remotely posted - this is to mock having a remotely hosted database by placing the json contents online. Navigate to `http://localhost:5000/tasks` list of json objects will show here. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
