## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Notes
- This application does not send the correct response, mainly because the Observable object of RXJS does not behave like it is supposed to, as explained in the documentation. The observable in this case seems incapavle of returning an AxiosResponse object, and even on mapping this response, it is still unable to reurn desired object.
- I have taken the liberty to display my attemp to the solutions in the console, hense this is where you can read them.

