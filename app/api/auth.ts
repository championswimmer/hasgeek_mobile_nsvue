import {getJSON} from 'tns-core-modules/http'
import userAuth from '@/store/modules/UserAuth'
import {path} from 'tns-core-modules/file-system'


const BASE_URL = 'https://auth.hasgeek.com/api/1'
const PATH_ID = 'id'

export const getUser = async () =>
  await getJSON({
    method: 'GET',
    url: path.join(BASE_URL, PATH_ID),
    headers: {
      'Authorization': `Bearer ${userAuth.authToken}`
    }
  })