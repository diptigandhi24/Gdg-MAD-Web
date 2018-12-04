import { axiosInstance } from './apiInstance'
import { setDeviceDetails } from '../actions/devicedetailsactions'

export const addDefaultDevice = (obj) => {
  return (dispatch, getState) => {
    return axiosInstance.post('/Consumer/addDefaultDevice', obj)
      .catch(err => {
        console.log(err)
        throw err
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(setDeviceDetails(response.data.data))
        } else {
          let err = new Error('Something went wrong')
          console.log(err)
          throw err
        }
        return response
      })
  }
}

export const updateDeviceDetails = (obj) => {
  return (dispatch, getState) => {
    return axiosInstance.post('/ConsumerProduct/updateDeviceDetails', obj)
      .catch(err => {
        console.log(err)
        throw err
      })
      .then((response) => {
        if (response.status === 200) {
        } else {
          let err = new Error('Something went wrong')
          console.log(err)
          throw err
        }
        return response
      })
  }
}
