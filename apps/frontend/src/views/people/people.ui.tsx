import { createPersonHobbiesResType } from "../../services/people";

interface PeopleUIProps {
  personId: string;
  personHobbies: createPersonHobbiesResType["hobbies"] | undefined;
  addHobby: () => void;
  personHobbiesError: Error | null;
  isPersonHobbiesPending: boolean;
  hobbyInputVal: string;
  setHobbyInputVal: (val: string) => void;
}

export function PeopleUI({
  personId,
  personHobbies,
  addHobby,
  personHobbiesError,
  isPersonHobbiesPending,
  hobbyInputVal,
  setHobbyInputVal,
}: PeopleUIProps) {
  return (
    <div>
      <h1>Hello, user {personId}</h1>
      <p>This is a place where you can list the hobbies you like</p>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addHobby();
        }}
      >
        <h2>Add new hobby</h2>
        <label>
          <div>New hobby name</div>
          <input
            value={hobbyInputVal}
            onChange={(e) => setHobbyInputVal(e.target.value)}
          />
        </label>
        <button>Add hobby</button>
      </form>
      {isPersonHobbiesPending ? "Adding hobby..." : null}
      {personHobbiesError ? <p>There was an error adding the hobby</p> : null}
      <hr />
      <h2 id="hobbies-heading">Hobbies</h2>
      {personHobbies?.length ? null : <p>There are no hobbies</p>}
      <ul aria-describedby="hobbies-heading" role="list">
        {personHobbies?.map((hobby) => <li key={hobby.id}>{hobby.name}</li>)}
      </ul>
    </div>
  );
}
