## Reactjs Boilerplate with react-router and redux

Scalable reactjs project architecture with react-router, redux (Redux Toolkit), scss, localstorage and faster build system with vite.

### Features

- Home page simple layout
- Login page simple layout
- Dashboard, About, Contact pages in admin Layout with very basic style
- Login page click on login button, set user in redux store and browser's localstorage
- Routes setup with react-router created dynamically 
- Protected routes enabled with very simple logic
- Dashboard page: simple demo of counter increment and decrement stored in redux
- HTTP request setup with RTK Query and simple demo code for login (post request with payload) and logout (get request)
- Each HTTP request passed through interceptor to prepare header for request
- Logout page to remove user from redux store and browser's localstorage
- Error page as default fallback page if wrong url is provided
- EsLint configured for js, jsx, css and scss linting during development
- Prettier configured for js, jsx, css and scss pretification during development
- project root files specified and absolute paths defined for elegant imports with app and editor enabled to recognize absolute paths
- vite configured to set absolute paths, custom server port defined for demo and custom output director defined for build 


### Environment

- IDE Version: Visual Studio Code

### Start application

install dependencies

```
yarn install
```

run application

```
yarn start
```

build application

```
yarn build
```

lint

```
yarn lint
```
