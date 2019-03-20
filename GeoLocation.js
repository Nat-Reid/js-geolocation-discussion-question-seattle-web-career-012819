function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad();
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}
Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}

let friendPositions = [[40.779437,-73.963244],[40.738527,-74.005363],[40.729975,-73.980926]]
let ourPostion;
async function getGeo(){
  navigator.geolocation.getCurrentPosition((location) =>{console.log('location',location);ourPosition = location});
  let {latitude,longitude} = await ourPosition.coords;
}
function closestFriend(){
  const friend1Distance= calculateDistance(...friendPositions[0],latitude,longitude);
  const friend2Distance= calculateDistance(...friendPositions[1],latitude,longitude);
  const friend3Distance= calculateDistance(...friendPositions[2],latitude,longitude);

  return Math.min(friend1Distance,friend2Distance,friend3Distance);
}
