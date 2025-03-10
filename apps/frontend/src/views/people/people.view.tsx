import { usePeopleLogic } from "./people.logic";
import { PeopleUI } from "./people.ui";

export function PeopleView() {
  // This would usually be derived from a router of some kind
  const person_id = "123";

  const {
    personHobbies,
    personHobbiesError,
    isPersonHobbiesPending,
    addHobby,
    hobbyInputVal,
    setHobbyInputVal,
  } = usePeopleLogic({
    person_id,
  });

  return (
    <PeopleUI
      personId={person_id}
      addHobby={addHobby}
      personHobbies={personHobbies}
      personHobbiesError={personHobbiesError}
      isPersonHobbiesPending={isPersonHobbiesPending}
      hobbyInputVal={hobbyInputVal}
      setHobbyInputVal={setHobbyInputVal}
    />
  );
}
