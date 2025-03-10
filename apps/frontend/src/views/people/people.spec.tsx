import { describe, expect, it } from "vitest";
import { renderContainer } from "../../utils/testing-utils/render-container";
import { PeopleView } from "./people.view";
import { screen, waitFor } from "@testing-library/react";
import { mockEndpoint } from "../../utils/testing-utils/server";
import { createPersonHobbiesResType, createPersonHobbiesUrl } from "../../services/people";
import { userEvent } from "@vitest/browser/context";

const user = userEvent.setup();

describe("PeopleView", () => {
    it("Should allow the user to add a hobby to their person", async () => {

        mockEndpoint(createPersonHobbiesUrl, {
            hobbies: [{
                id: "0",
                name: "Go to the gym"
            }]
        } satisfies createPersonHobbiesResType, "post")

        renderContainer(<PeopleView />)

        expect(screen.getByText("There are no hobbies")).toBeInTheDocument();

        await user.type(screen.getByLabelText("New hobby name"), "Do something fun");

        await user.click(screen.getByText("Add hobby"));

        await waitFor(() => expect(screen.getByText("Go to the gym")).toBeInTheDocument())
    })
})