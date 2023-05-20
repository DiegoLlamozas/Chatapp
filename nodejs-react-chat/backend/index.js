const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        firstname: username
      },
      {
        headers: { "private-key": "96373b28-9313-4c27-8055-c872bdb3d8c3 " }
      }
    );

    // Forward the response received from the ChatEngine API
    return res.status(r.status).json(r.data);
  } catch (e) {
    // If an error occurs, send an error response
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
