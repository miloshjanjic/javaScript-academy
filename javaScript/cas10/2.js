// function timingEvent(argument) {

// 	let x = setInterval(()=>{
// 		console.log("This is setInterval");
// 	},2000);

// 	setTimeout(()=>{
// 		console.log(argument);
// 		window.clearInterval(x);
// 	},5000);

// 	console.log("Petar i Ana");
// }

// timingEvent("Marija");

let promise = new Promise((resolve, reject) => {
	let domasna = false;

	if (domasna == true) {
		resolve("Success");
	} else {
		reject("Failed!");
	}
});


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


const getPosition = () => {
	return new Promise((resolve, reject) => {

		let result;
		navigator.geolocation.getCurrentPosition(
			success => {
				result = success;
				resolve(success);
			},
			error => {
				// reject(error);
			})
	});
}

const setTimer = vreme => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Done!");
		}, vreme)
	});
}

// function getUserPosition(){
// 	let positionData;
// 	let promiseToGetPosition = getPosition();

// 	promiseToGetPosition.then((position)=>{
// 		// positionData = position;
// 		console.log(position);
// 		return setTimer(2000);
// 	}).then(str=>{
// 		console.log(str);
// 	}).catch(()=>{})
// }

async function asyncGetUserPosition() {
	try {
		const pos = await getPosition();
		const timerData = await setTimer();
		console.log(timerData, pos);
	}
	catch (Error) {
		console.log(Error);
	}


	try {
		let p = await promise;
		console.log(p)
	} catch (Error) {
		console.log(Error);
	}
}

asyncGetUserPosition();

 // getUserPosition();