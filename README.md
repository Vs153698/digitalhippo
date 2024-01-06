How to setup payload cms, refer to below packages and file

PACKAGES:

"@payloadcms/bundler-webpack": "^1.0.5", 
"@payloadcms/db-mongodb": "^1.2.0",
"@payloadcms/richtext-slate": "^1.3.1",
"cross-env": "^7.0.3",
"dotenv": "^16.3.1",
"express": "^4.18.2",
"nodemon": "^3.0.2",
"payload": "^2.6.0",
"ts-node": "^10.9.2"

SCRIPTS:

"dev": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts nodemon",

FILES CREATED:

tsconfig.server.json
nodemon.json
.env
src/payload.config.ts
src/get-payload.ts
src/next-utils.ts
src/server.ts