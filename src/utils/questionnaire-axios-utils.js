import axios from "axios";

const apiUrl = "https://opentdb.com/api.php?amount=10";

export const getQuestion = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};
