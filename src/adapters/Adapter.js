class Adapter {

   static signUpFetch(userInfo) {
    return fetch("http://localhost:3001/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
  }

  static loginFetch(credentials) {
    return fetch("http://localhost:3001/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
  }

  static fetchCurrentUser() {
    return fetch("http://localhost:3001/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
    })
  }

  static logoutFetch() {
    return fetch("http://localhost:3001/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export default Adapter;
