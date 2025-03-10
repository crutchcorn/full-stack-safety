import { afterEach, beforeAll } from "vitest";
import { worker } from "./server";


beforeAll(() => worker.start());

afterEach(() => worker.resetHandlers());
