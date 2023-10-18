import http from './axios.config';
function getArticleList(){
    return new Promise((resolve, reject) => {
      http("post",'/api/user/login').then(res => {
        resolve (res);
      },error => {
        console.log("网络异常",error);
        reject(error)
      })
      http("post",'/api/user/getCode').then(res => {
        resolve (res);
      },error =>{
        console.log("网络异常",error);
        reject(error)
      })
    }) 
  }
  
  export {getArticleList} 
  
  