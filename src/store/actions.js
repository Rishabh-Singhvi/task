import axios from 'axios'
export const  cityList=({ commit })=>{
    axios.get('https://indian-cities-api-nocbegfhqg.now.sh/cities').then(response=>{
           commit('SET_CITY',response.data)
    })
  }