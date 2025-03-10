import {Hono} from "hono";
import {messageGet} from "./methods/get/message-get.ts";

export const messageApp = new Hono()
  .route('/', messageGet)
