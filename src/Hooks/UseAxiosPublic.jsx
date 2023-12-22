// import React from 'react';

// const UseAxiosPublic = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default UseAxiosPublic;


import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'http://localhost:5000',
});

const UseAxiosPublic = () => {
  return publicApi;
};

export default UseAxiosPublic;
