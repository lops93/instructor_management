import { useState, useMemo } from "react";
import Instructor from "ui/components/instructor/instructor";
import { UserThumbInterface } from "data/@types/UserInterface";
import { ApiService } from "data/services/ApiService";
import { ValidationService } from "data/services/ValidationService";

export default function useIndex() {
  const [search, setSearch] = useState(""),
    validSearch = useMemo(() => {
      return ValidationService.search(search);
    }, [search]),
    [error, setError] = useState(false),
    [showInstructors, setShowInstructors] = useState(false),
    [searching, setSearching] = useState(false),
    [Instructors, setInstructors] = useState([] as UserThumbInterface[]),
    [RemainingInst, setRemainingInst] = useState(0);

  async function searchInstructors(desc: string) {
    setShowInstructors(false);
    setSearching(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        instructors: UserThumbInterface[];
        qty_instructors: number;
      }>("/api/instructors-course?course=" + search);
      setInstructors(data.instructors);
      setRemainingInst(data.qty_instructors);

      setShowInstructors(true);
      setSearching(false);
    } catch (error) {
      setError("No instructor with this specialty was found.");
      setSearching(false);
    }
  }
  return {
    search,
    setSearch,
    validSearch,
    searchInstructors,
    error,
    Instructors,
    showInstructors,
    searching,
    RemainingInst,
  };
}
