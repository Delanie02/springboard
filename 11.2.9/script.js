// 1. Analyze the API: Visit `https://reqres.in/` website and understand the usage of the API.Note down the API URL.

// I signed up for a free account and then got the following fetch code from the API Playground (https://app.reqres.in/playground):

// await fetch("https://reqres.in/api/users?page=2", {
//   method: "GET",
//   headers: {
//     "x-api-key": "reqres_027e85a448b3420f9fa8b63dd085b5e6",
//   },
// });

// await fetch("https://reqres.in/api/login", {
//   headers: {
//     "x-api-key": "reqres_027e85a448b3420f9fa8b63dd085b5e6",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     email: "eve.holt@reqres.in",
//     password: "cityslicka",
//   }),
// });

// 2. Infiltrate the System: Use the "LOGIN - SUCCESSFUL" POST method to gain access to the system. Display the token or the error in the`system-message` container. Store the token in a variable. (The correct email and password are hidden in the API docs.)

// I used the login (success) request builder then went to the API's documentation page and asked Gemini how to use it to display the and store the token, which gave me  code I used as a reference.

let authToken = null;

async function loginUser(email, password) {
  const messageContainer = document.getElementById("system-message");

  try {
    const res = await axios.post("https://reqres.in/api/login", {
      headers: {
        "x-api-key": "reqres_027e85a448b3420f9fa8b63dd085b5e6",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // if there is a response with data and a token...
    if (res.data && res.data.token) {
      // store the token in the authToken variable
      authToken = res.data.token;

      // if the messageContainer exists...
      if (messageContainer) {
        // and display the token
        messageContainer.textContent = `Login successful! Token: ${authToken}`;
      }
    }
  } catch (e) {
    let errorMessage = "Login failed";

    // if there is an error response and data...
    if (e.response && e.response.data) {
      // then update the errorMessage to reflect the error
      errorMesage = e.response.data.error || errorMessage;
    }
    // if there isn't an error response or data, but the request was sent...
    else if (e.request) {
      // then display that there was no response
      errorMessage = "No response from server";
    }
    // if neither the above are true, just set the errorMessage to the message provided.
    else {
      errorMessage = e.message;
    }

    if (messageContainer) {
      messageContainer.textContent = `Error: ${errorMessage}`;
    }
  }
}

loginUser("eve.holt@reqres.in", "cityslicka");

// 3. Sneak Away from the System: Mimic the logout behavior by clearing the token when the `logout-button` is pressed. (No API requests will be made here.)

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", () => {
  authToken = null;
});

// 4. Gather Intelligence: Once inside, your task is to list black-hat hackers using the "LIST USERS" GET method, incorporating both the `page` and `delay` query parameters in one single request. (Check being inside using the token variable. If you logged out, you shouldn't be listing.)

// The list users request builder gave me the following code to reference.
// await fetch("https://reqres.in/api/users?page=2&delay=1", {
//   method: "GET",
//   headers: {
//     "x-api-key": "reqres_027e85a448b3420f9fa8b63dd085b5e6",
//   },
// });

async function listUsers() {
  const response = await axios.get(
    "https://reqres.in/api/users?page=2&delay=1",
    {
      headers: {
        "x-api-key": "reqres_027e85a448b3420f9fa8b63dd085b5e6",
      },
    },
  );
  console.log(response);
}
listUsers();
