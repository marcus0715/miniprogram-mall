import {addressBookInfo} from '../mockData/addressBook';

export const getAddressBookInfo = () => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(addressBookInfo)
    },200)
  })
}