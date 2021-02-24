import Adapter from '../adapters/Adapter';

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
export const signUp = credentials => {
  console.log("credentials are: ", credentials)
  const userInfo = {
    user: credentials
  }
  return dispatch => {
    return Adapter.signUpFetch(userInfo)
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(setCurrentUser(json.data))
        }
      })
      .catch(json => console.log(json))
  }
}

export const login = credentials => {
  return dispatch => {
    return Adapter.loginFetch(credentials)
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(setCurrentUser(json.data))
        }
      })
      .catch(json => console.log(json))
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return Adapter.fetchCurrentUser()
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(setCurrentUser(json.data))
        }
      })
      .catch(json => console.log(json))
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return Adapter.logoutFetch()
  }
}
