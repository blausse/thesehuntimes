const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = require("express")();
const cors = require("cors");
require('dotenv').config();

app.use(cors());
app.use(express.json());


app.post("/api/chat", async (req, res) => {
    const {prompt} = req.body;
    const configuration = new Configuration({
      organization: "org-2ZLyNatOGEITBrePfZfYFfhu",
      apiKey: process.env.API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0, // Higher values means the model will take more risks.
      max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
  })
    res.json(response.data.choices[0].text);
    
  });

module.exports = app;
