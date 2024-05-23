1) After running the web by entering the command `npm run dev` in the terminal, we see the following message:

```
> cs358-web-app@0.1.0 dev
> concurrently "npm run dev:next" "npm run dev:ws"

[0]
[0] > cs358-web-app@0.1.0 dev:next
[0] > next dev
[0]
[1]
[1] > cs358-web-app@0.1.0 dev:ws
[1] > node --loader ts-node/esm src/server.mts
[1]
[1] (node:29956) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
[1] --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
[1] (Use `node --trace-warnings ...` to show where the warning was created)
[0]   ▲ Next.js 14.2.3
[0]   - Local:        http://localhost:3000
[0]
[0]  ✓ Starting...
[0]  ✓ Ready in 3s
```

I am using
```
"dev:ws": "node --loader ts-node/esm src/server.mts",
```
in the `scripts` for this project. 
You can find it out in `package.json` file.

\
As I use `mts` file for the `server.mts` file, I configured the project with the `--loader` feature.

The use of `--loader` option gives us the following warning:
```
[1] > node --loader ts-node/esm src/server.mts
[1]
[1] (node:29956) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
[1] --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
[1] (Use `node --trace-warnings ...` to show where the warning was created)
```
Do not be scared by this. It does not affect the project. This warning is an `ExperimentalWarning`: it is telling us the `--loader` option is still experimental in Node.js. It is not yet stable and may change or be removed in future versions of Node.js. This means: as long as my **current** setup works correctly and I am aware of the experimental nature of the feature, ths use of `--loader` option does not break this project. It is very unlikely to have furthur updates and changes about this experimental loader feature. **Do not worry, I will follow Node.js updates to stay informed about the status of the `--loader` experimental feature.**

2) To run the client end and the server end with only one command `npm run dev` (which is extremely useful haha), I configured the `scripts` of the project to run concurrently two commands:
```
    "dev": "concurrently \"npm run dev:next\" \"npm run dev:ws\"",
```
Please refer again to the file `package.json`.

\
Sidenote: Although it has taken me time and many efforts (to search online and ask many questions to AI tools, *which is, I assume, very normal in Computer Science in general*) to configure the project, so to make everything compatible in this project, in order to have the websockets that work, I still need to say I love the lovely Computer Networks 💓💓