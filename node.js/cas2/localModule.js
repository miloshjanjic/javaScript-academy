 
const log = {
  info: function (info){
    console.log(`Info function : ${info}`);
  },
  warning : function (warning){
    console.log(`Warning function : ${warning}`);
  },  
  // console.log(warnign ...);
  error : function (error){
    console.log(`Error function : ${error}`);
  }  
};

module.exports = log;


