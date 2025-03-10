import {resolve} from "node:path";
import {writeFile} from "node:fs/promises";
import {app} from "../src/shared.ts";
import {generateSpecs} from "hono-openapi";
import {openAPIOptions} from "../src/constants/open-api.ts";

const outPath = resolve(import.meta.dirname, "../out/openapi.json");

const specs = await generateSpecs(app, openAPIOptions);
await writeFile(outPath, JSON.stringify(specs, null, 2), 'utf-8')
