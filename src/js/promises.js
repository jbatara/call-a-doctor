export function getConditions() {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.apiKey}`;
    console.log(url);
    request.onload = function() {
      if (this.status === 200) {
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
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=`+symptom+`&location=`+location+`&limit=10&user_key=${process.env.apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        console.log('resolved');
        resolve(request.response);
      } else {
        console.log('rejected');
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

}
