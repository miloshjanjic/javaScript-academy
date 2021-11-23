// function timingEvent(argument){
//   let x = setInterval(() => {
//     console.log("This is setInterval");
//   },2000);

//   setTimeout(()=>{
//     console.log(argument);  
//     window.clearInterval(x);
//   },5000);  
//   console.log("Petar i ana");
// }
// timingEvent("Marija");

let promise = new Promise((resolve, reject) => {
  let domasna = true;
  if (domasna == true) {
    resolve("Success");
  } else {
    reject("Failed!");
  }
});

// promise.then((p)=>{
//   console.log(p);
// }).catch((e)=>{
//   console.log(`This was an error ${e}`);
// })

// getPos(){
//   return position;
// }
// handlePos(a){
//   a(){
//   }
// }
// handlePos(getPos());

// prviot argument na getCurrentPosition() e sekogas funkcija koja sto treba da primi eden parametar
// navigator.geolocation.getCurrentPosition((position)=>{
//   console.log("Latitude:"+position.coords.latitude);
// })

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        //reject(error);
      }
    )
  })
}
const setTimer = vreme => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, vreme)
  });
}
// function getUserPosition(){
//   let positionData;
//   let promiseToGetPosition = getPosition();

//   promiseToGetPosition.then((position)=>{
//     positionData=position;
//     console.log(positionData);
//     return setTimer(2000);
//   }).then(str=>{
//     console.log(str);
//   })
// }
// Promise.all (gi rezolvira site promises)-prima niza od promices

async function asyncGetUserPosition() {
  try {
    const pos = await getPosition();
    const timerData = await setTimer();
    let p = await promise;
    console.log(timerData, pos, p);
  }
  catch (Error) {
    console.log(Error);
  }
}
asyncGetUserPosition();
// getUserPosition();

// Primer od cas; 
// function timingEvent(argument) {
// 	let x = setInterval(()=>{
// 		console.log("This is setInterval");
//   },2000);

// 	setTimeout(()=>{
// 		console.log(argument);
// 		window.clearInterval(x);
// 	},5000);
// 	console.log("Petar i Ana");
// }
// timingEvent("Marija");
// let promise = new Promise((resolve, reject)=>{
// 	let domasna = true;
// 	if(domasna==true){
// 		resolve("Success");
// 	}else{
// 		reject("Failed!");
// 	}
// });
// promise.then((p)=>{
// 	console.log(p);
// }).catch((e)=>{
// 	console.log(`There was an error ${e}`);
// })
// getPos(){
// 	return position;
// }
// handlePos(a){
// 	a(){
// 	}
// }
// handlePos(getPos());
// navigator.geolocation.getCurrentPosition(position=>{
// 	console.log("Latitude:"+position.coords.latitude);
// });

// const getPosition = ()=>{
// 	return new Promise((resolve,reject)=>{
// 		navigator.geolocation.getCurrentPosition(
// 			success=>{
// 				resolve(success);
// 			},
// 			error=>{
// 				// reject(error);
// 			}
// 		)
// 	});
// }

// const setTimer = vreme =>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve("Done!");
// 		},vreme)
// 	});
// }


// function getUserPosition(){
// 	let positionData;
// 	let promiseToGetPosition = getPosition();
// 	promiseToGetPosition.then((position)=>{
// 		positionData = position;
// 		console.log(positionData);
// 		return setTimer(2000);
// 	}).then(str=>{
// 		console.log(str);
// 	})
// }
// getUserPosition();

