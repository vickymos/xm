import { endpoints } from "./config";

const authProvider = {
  isAuthenticated: false,
  signin(username: string = "", password = "", callback: VoidFunction) {

    let bodyRaw = {
      "name": username,
      "password": password
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyRaw),
    };

    fetch(
      endpoints.login,
      requestOptions
    )
      .then((response) => {
        // setAPiResponse(response);
        return response.json();
      })
      .then((data) => {
        authProvider.isAuthenticated = true;
        callback();
        console.log(data);
        localStorage.setItem('xmTokenLocalKey', JSON.stringify(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { authProvider };
