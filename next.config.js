const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

const environment_variables = {
    env: {
        AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    },
}

module.exports = withPlugins([
    withSvgr,
    environment_variables
])
