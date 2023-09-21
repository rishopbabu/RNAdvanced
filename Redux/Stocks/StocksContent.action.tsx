import axios from 'axios';
import {Dispatch} from 'redux';

export const GET_STOCKS = 'GET_STOCKS';

const API_URL = 'https://mocki.io/v1/88d1f054-781c-4c8b-b32d-810d7a310df1';

// export const getStocksData = () => {
//     return async (dispatch) => {
//         try {
//             const result = await fetch(API_URL, {
//                 method: 'GET',
//                 headers: {
//                     'content-type': 'application/json',
//                 }
//             });
//             const data = await result.json();
//             console.log(data)
//             if(data) {
//                 dispatch({
//                     type: GET_STOCKS,
//                     payload: data
//                 })

//             } else {
//                 console.log('unable to fetch')
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

export const getStocksData =
  (onSuccess: any, onError: (e: any) => void) => async (dispatch: Dispatch) => {
    try {
      const res = await axios({
        url: API_URL,

        method: 'GET',

        headers: {
          'content-type': 'application/json',
        },
      });

      if (res?.data) {
        onSuccess(res.data);
      }
    } catch (e: any) {
      onError(e.response);
    } finally {
      console.log('strapi api completed');
    }
  };
