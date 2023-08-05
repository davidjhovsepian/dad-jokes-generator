const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "ajk5NPAvCONDMNeovsdRtg==FTY2IK2NGHs0iwbZ";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function getJoke() {
  jokeEl.innerText = "Updating...";
  btnEl.disabled = true;

  try {
    const response = await fetch(apiURL, options);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "Failed to fetch a dad joke. Please try again.";
  } finally {
    btnEl.disabled = false;
  }
}

btnEl.addEventListener("click", getJoke);
