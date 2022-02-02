### Bootstrap Integration

run : npm i bootstrap@version --save to install bootstrap to your angular application
add bootstrap style to your application either via
- style.css : @import "~bootstrap/dist/css/bootstrap.css";
- angular.json css section : "bootstrap/dist/css/bootstrap.css"

### Angular CLI

ng g c name to generate component

ng new name to generate project

ng new name --routing=true --style=css to generate project with options

ng g class to generate classes

ng c s name to generate service

### Create and use Http Requests

goto app.module.ts and import http client module
goto your service class and import httpClient in the constructor

### Apply I18n

1- npm i @ngx-translate/core @ngx-translate/http-loader --save
2- add translate module as defined in import section.
3- create en and fr ... files and start using them {{ 'key' | translate}}

### Add Notyf

1- npm i notyf --save
2- add notyf.min.css to angular.json file
3- provide notyf to app.module.ts using notyf.token.ts
4- create notyf.ts service file in order to customize the notyf coomponent.
5- inject the service and call your notyf!

### Reactive Forms

1- Create FormGroup object using formBuilder.
2- In you html form tag add [formGroup]="productFormGroup"
3- add formControlName="name" to each form data
4- productFormGroup.value contains the json object
