const axios = require("axios").default;

async function Test() {
  console.log("--- axios ---");
  let res = null;
  try {
    res = await axios.get("https://randomuser.me/api/");
  } catch (error) {
    console.log("Error: ", error);
  }
  if (res.status !== 200) {
    console.log("ERROR status: ", res.status);
    return;
  }
  console.log(res.data);
}

module.exports = Test;
