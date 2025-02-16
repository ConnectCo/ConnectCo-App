import AsyncStorage from "@react-native-async-storage/async-storage";

export const getRecentSearch = async () => {
  try {
    const recentSearch = (await AsyncStorage.getItem("recent-search")) || "[]";

    return JSON.parse(recentSearch);
  } catch (err) {
    console.error("Error in 'getRecentSearch': ", err);
    return [];
  }
};

export const addRecentSearch = async (search: string) => {
  try {
    const recentSearch = await getRecentSearch();
    const newSearch = recentSearch.filter((item: string) => item !== search);

    newSearch.unshift(search);

    await AsyncStorage.setItem("recent-search", JSON.stringify(newSearch));
    return newSearch;
  } catch (err) {
    console.error("Error in 'addRecentSearch': ", err);
  }
};

export const removeRecentSearch = async (search: string) => {
  try {
    const recentSearch = await getRecentSearch();
    const newSearch = recentSearch.filter((item: string) => item !== search);

    await AsyncStorage.setItem("recent-search", JSON.stringify(newSearch));
    return newSearch;
  } catch (err) {
    console.error("Error in 'removeRecentSearch': ", err);
  }
};
