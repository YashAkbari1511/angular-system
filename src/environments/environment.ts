// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const API_URL = `http://localhost:3000`;    //'http://wellness-safarivet.wcg/api/admin/', //'https://testapi.demoserver.biz/api/',
export const COOKIE_PREFIX = 'wcg';
export const COOKIE_DOMAIN = 'localhost';