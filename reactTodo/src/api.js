const APIURL = '/api/todos/';

export async function getTodos() {
  return fetch(APIURL)
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {     //resp.json will be the error message
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later. Server is not responding'};
          throw err;
        }
      }
      return resp.json()    
    })
}

export async function createTodo(val) {
  return fetch(APIURL, {
    method: 'post', //the default method is get
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({name: val})
  })
  .then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {     //resp.json will be the error message
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Please try again later. Server is not responding'};
        throw err;
      }
    }
    return resp.json()    
  })
}

export async function removeTodo(id) {
  const deleteUrl = APIURL + id;
  return fetch(deleteUrl, {
      method: 'delete', //the default method is get
    })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {     //resp.json will be the error message
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later. Server is not responding'};
          throw err;
        }
      }
      return resp.json()    
    })
}

export async function updateTodo(todo) {
  const updateUrl = APIURL + todo._id;
  return fetch(updateUrl, {
      method: 'put', //the default method is get
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({completed:!todo.completed})
    })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {     //resp.json will be the error message
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later. Server is not responding'};
          throw err;
        }
      }
      return resp.json()    
    })
}