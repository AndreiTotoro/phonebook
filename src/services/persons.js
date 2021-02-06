import axios from 'axios'
const baseUrl = "http://localhost:3001/persons/"

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

const del = (objId) =>{
    return axios.delete(baseUrl + `${objId}`)
}

const update = (objId, newObject) => {
    return axios.put((baseUrl + `${objId}`), newObject)
}

  export default { 
    getAll: getAll, 
    create: create,  
    del: del,
    update: update
  }