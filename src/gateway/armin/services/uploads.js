import { arminAxios } from '../ArminAxiosClient'

const resource = 'uploads'

const create = async (body) => {
  arminAxios.defaults.timeout = 10000 * 2

  const response = await arminAxios.post(
    resource,
    body,
    {
      'Accept': 'application/json'
    })
  return response.data
}

export {
  create
}
