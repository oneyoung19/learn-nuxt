import { CBI_CATCHER_APP } from './BASE_URL'
import httpRequest from '@/utils/http'

export const getCountryCodeList = (data: unknown) => {
  return httpRequest.post(`${CBI_CATCHER_APP}/catcher/front/clues/common/getCountryCode`, data, {
    server: false
  })
}

export const cluesSubmit = (data: unknown) => {
  return httpRequest.post(`${CBI_CATCHER_APP}/catcher/front/clues/submit`, data, {
    server: false
  })
}
