import * as paymentApiList from './payment'
import * as planPurchase from './planpurchase'
import * as userdetail from './userDetail'
import * as devicedetail from './devicedetail'
import * as requestApiList from './request'
import * as trackclaimList from './trackclaim'
import * as uploadDoc from './uploadDocument'

export const getEligiblePlansList = planPurchase.getEligiblePlansList
export const devicePlans = planPurchase.devicePlans
export const getSelectedPlanDetails = planPurchase.getSelectedPlanDetails
export const getConsumerProfile = userdetail.getConsumerProfile
export const getContractDetails = userdetail.getContractDetails
export const asyncRequestOTP = userdetail.asyncRequestOTP
export const asyncVerifyOTP = userdetail.asyncVerifyOTP
export const getAppConfig = userdetail.getAppConfig
export const createConsumer = userdetail.createConsumer
export const asyncActivatePlan = planPurchase.asyncActivatePlan
export const getPaymentDetail = paymentApiList.getPaymentDetail
export const addDefaultDevice = devicedetail.addDefaultDevice
export const updateDeviceDetails = devicedetail.updateDeviceDetails
export const fetchCurrentLocation = userdetail.fetchCurrentLocation
export const setServiceRequestModes = requestApiList.setServiceRequestModes
export const fetchUserLocations = userdetail.fetchUserLocations
export const updateUserLocations = userdetail.updateUserLocations
export const getGeoLocationAsync = requestApiList.getGeoLocationAsync
export const submitClaim = requestApiList.submitClaim
export const getTrackClaimDetails = trackclaimList.trackClaim
export const getUploadLink = uploadDoc.getUploadLink
export const getFilePath = uploadDoc.getFilePath
export const uploadRequestDoc = uploadDoc.uploadClaimRequestDoc

export default {
  getEligiblePlansList,
  devicePlans,
  getSelectedPlanDetails,
  getConsumerProfile,
  getContractDetails,
  asyncActivatePlan,
  getPaymentDetail,
  getAppConfig,
  createConsumer,
  addDefaultDevice,
  updateDeviceDetails,
  fetchCurrentLocation,
  setServiceRequestModes,
  fetchUserLocations,
  updateUserLocations,
  getGeoLocationAsync,
  submitClaim,
  getTrackClaimDetails,
  getUploadLink,
  getFilePath,
  uploadRequestDoc
}
