import {Hono} from "hono";
import {indexGet} from "./methods/get/index-get.ts";
import {indexPost} from "./methods/post/index-post.ts";

export const indexApp = new Hono()
  .route('/', indexGet)
  .route('/', indexPost)
