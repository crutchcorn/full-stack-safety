import { http } from "msw";
import {
  createPersonHobbiesResType,
  createPersonHobbiesUrl,
} from "../../services/people";
import { returnJSON } from "./json";

// Should be replaced with an env var of some kind
const baseUrl = "example.com";

export const getAbsolutePeoplePath = (path: string) => {
  return `https://${baseUrl}${path}`;
};

// The default mocks that can be replaced on a test-by-test basis
export const peopleHandlers = [
  http.post(
    getAbsolutePeoplePath(createPersonHobbiesUrl),
    returnJSON({
      hobbies: [
        {
          id: "1",
          name: "Tennis",
        },
      ],
    } satisfies createPersonHobbiesResType),
  ),
];
