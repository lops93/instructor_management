export const ValidationService = {
  search(search = ""): boolean {
    return search.length > 1;
  },
};
