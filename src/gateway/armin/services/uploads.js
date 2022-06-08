import { arminAxios } from '../ArminAxiosClient'

const resource = 'uploads'

const createPicture = async (body) => {
  const resourcePath = 'propertyPictures'
  const response = await arminAxios.post(
    `${resource}/${resourcePath}`,
    body,
    {
      'Accept': 'application/json'
    })
  return response.data
}

const createUnitImage = async (body) => {
  const resourcePath = 'unitImage'
  const response = await arminAxios.post(
    `${resource}/${resourcePath}`,
    body,
    {
      'Accept': 'application/json'
    })
  return response.data
}

const removePicture = async (uploadId, propertyId) => {
  arminAxios.defaults.timeout = 10000 * 5
  const response = await arminAxios.delete(`${resource}/${uploadId}?propertyId=${propertyId}`)
  return response.data
}

export {
  createPicture,
  createUnitImage,
  removePicture
}
