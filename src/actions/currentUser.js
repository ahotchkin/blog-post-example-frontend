// synchronous actions
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous actions
export const login = credentials => {
  console.log("credentials are: ", credentials)
  return dispatch => {
    return fetch("http://localhost:3001/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          console.log(json)
          dispatch(setCurrentUser(json))
        }
      })
      .catch(json => console.log(json))
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          console.log(json)
          dispatch(setCurrentUser(json))
        }
      })
      .catch(json => console.log(json))
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3001/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}
