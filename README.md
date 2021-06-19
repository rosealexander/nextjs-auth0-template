[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<!-- TITLE -->
# [next.js-auth0-template](https://nextjs-auth0-template.herokuapp.com) 
[View the Demo >](https://nextjs-auth0-template.herokuapp.com)\
<br>
![Shooting Star](./public/favicon.ico?raw=true "Title")

<!-- LIBRARIES -->
### what's included
* [Next.js](https://nextjs.org/docs/getting-started)
* [Auth0-Next SDK](https://github.com/auth0/nextjs-auth0)
* [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
* [Prisma](https://www.prisma.io/docs/)
* [Material-UI](https://material-ui.com/getting-started/learn/)

<!-- USAGE -->
### usage
1. Clone the repo

1. Install packages with Yarn
   ```sh
   yarn install
   ```

1. Create a new [Heroku](https://www.heroku.com) application and attach a [Heroku Postgres Database](https://elements.heroku.com/addons/heroku-postgresql) as an add-on.

1. Open .env in the project root folder and add this database information to DATABASE_URL

1. Attach another Heroku Postgres Database and add its info to SHADOW_DATABASE_URL in .env

1. Create initial table information and seed the database by running the following command.
   ```sh
   npm run seed
   ```

1. Create a new Regular Web Application with [Auth0](https://auth0.com).

1. Add the following Rules: 
   <br />
   Dashboard -> Auth Pipeline -> Rules -> Create
   * Select the "Add Username To App Metadata" rule template under Enrich Profile.
   * Create another Empty Rule named "Add Username to idToken":
   * Add the following:
   ```shell
   function getUsername(user, context, callback) 
   {
       const namespace = 'https://[Heroku app name].herokuapp.com';
       context.idToken[namespace + 'username'] = user.username;
       return callback(null, user, context);
   }
   ```

1. Add Allowed Callback URLs:
   <br />
   Dashboard -> Applications -> YOUR APP -> Allowed Callback URLs
   ```shell
   https://[Heroku app name].herokuapp.com/api/auth/callback, 
   http://localhost:3000/api/auth/callback
   ```

1. Add Allowed Logout URLs:
   <br />
   Dashboard -> Applications -> YOUR APP -> Allowed Logout URLs
   ```shell
   https://nextjs-auth0-template.herokuapp.com, 
   http://localhost:3000
   ```
   
1. Add the following information to [.env.local](https://nextjs.org/docs/basic-features/environment-variables)
    in the project root directory.
    * You can use this command to generate an appropriate string for AUTH0_SECRET 
      ```shell
      node -e "console.log(crypto.randomBytes(32).toString('hex'))"
      ```  
    * AUTH0_BASE_URL=http://localhost:3000
    * AUTH0_ISSUER_BASE_URL=https://[Auth0 Application Domain]
    * AUTH0_CLIENT_ID=[Auth0 Application Client ID]
    * AUTH0_CLIENT_SECRET=[Auth0 Application Client Secret]
    * AUTH0_NAMESPACE=https://[Heroku app name].herokuapp.com


1. Add each env variable from .env.local to [Heroku Config](https://devcenter.heroku.com/articles/config-vars) with the following additions.
    * baseURL=https://[Heroku app name].herokuapp.com
    * AUTH0_BASE_URL=https://[Heroku app name].herokuapp.com
   ```shell
    heroku config:set [ENV_NAME]=[ENV_VALUE] -a [APPLICATION_NAME]
    ```

1. Navigate to your applications dashboard -> [Deploy to Heroku](https://devcenter.heroku.com/articles/github-integration)

<!-- EXAMPLES -->
### more examples
* [Nextjs with Auth0 SDK](https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md)
* [Next.js with Prisma](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-nextjs)
* [Next.js with Redux-Toolkit](https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit)
* [Next.js with Material-UI](https://github.com/vercel/next.js/tree/canary/examples/with-material-ui)

<!-- LICENSE -->
### license
Distributed under the MIT License. See `LICENSE` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/rosealexander/mui-redux-next-template.svg?style=for-the-badge
[stars-url]: https://github.com/rosealexander/mui-redux-next-template/stargazers
[license-shield]: https://img.shields.io/github/license/rosealexander/mui-redux-next-template.svg?style=for-the-badge
[license-url]: https://github.com/rosealexander/mui-redux-next-template/blob/master/LICENSE
