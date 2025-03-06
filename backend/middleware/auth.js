const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { auth0 } = require("../config/authConfig");

const checkAuth = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksUri: `https://${auth0.domain}/.well-known/jwks.json`
    }),
    audience: auth0.clientId,
    issuer: `https://${auth0.domain}/`,
    algorithms: ["RS256"]
});

module.exports = checkAuth;  // ✅ Ensure only the function is exported
