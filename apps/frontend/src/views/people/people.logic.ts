import { useMutation } from "@tanstack/react-query";
import { useNetworkingParams } from "../../hooks/useNetworkingParams";
import {
  createPersonHobbies as _createPersonHobbies,
  HobbyCreatePayload,
} from "../../services/people";
import { useEffect, useRef, useState } from "react";

interface UsePeopleLogicProps {
  person_id: string;
}

export function usePeopleLogic({ person_id }: UsePeopleLogicProps) {
  const networkingProps = useNetworkingParams();

  const {
    data: personHobbies,
    mutate: createPersonHobbies,
    error: personHobbiesError,
    isPending: isPersonHobbiesPending,
  } = useMutation({
    mutationKey: ["people", person_id, "hobbies"],
    mutationFn: (data: Omit<HobbyCreatePayload, "person_id">) => {
      return _createPersonHobbies({
        ...networkingProps,
        ...data,
        person_id,
      });
    },
  });

  const hobbyCountRef = useRef(0);

  const [hobbyInputVal, setHobbyInputVal] = useState("");

  const addHobby = () => {
    const newHobby = { name: hobbyInputVal, id: "" + ++hobbyCountRef.current };
    createPersonHobbies({
      new_hobbies: [newHobby],
    });
  };

  useEffect(() => {
    if (!personHobbiesError) return;
    console.error(personHobbiesError);
  }, [personHobbiesError])

  return {
    personHobbies,
    createPersonHobbies,
    personHobbiesError,
    isPersonHobbiesPending,
    hobbyInputVal,
    setHobbyInputVal,
    addHobby,
  };
}
