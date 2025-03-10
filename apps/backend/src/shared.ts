import {Hono} from 'hono'
import {indexApp} from "./routes/index/index.app.ts";
import {messageApp} from "./routes/[message]/[message].app.ts";

const app = new Hono()
  .route("/", indexApp)
  .route('/message/:message', messageApp);

export {app}
