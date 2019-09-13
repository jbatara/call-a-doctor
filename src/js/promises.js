export function getConditions() {
  return new Promise(function(res, rej) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.apiKey}`;
    response.onLoad = function() {
      if (this.stats === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });
}



export function getDoctors(location, symptom) {
  return new Promise(function(res, rej) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=delivery&location=location0&limit=10&user_key=${process.env.apiKey}`;
    response.onLoad = function() {
      if (this.stats === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

}
