export function printConditionstoDropDown(conditionsJSON) {
  let output = '<datalist id="symptoms">';
  for(let i=0; i<conditionsJSON.data.length;i++){
    if(conditionsJSON.data[i].active){
      let symptom = conditionsJSON.data[i].name;
      output += '<option value='+symptom+'>';
    }
  }
  output += '</datalist>';
  return output;
}

export function printDoctors(doctorJSON) {
  let output = '';
  if(doctorJSON){
    for (let i = 0; i < doctorJSON.data.length; i++) {
      let practiceInformationArray = doctorJSON.data[i].practices.map(function(practice) {
        let practiceName = practice.name;
        let newPatients = acceptsPatients(practice.accepts_new_patients);
        let phoneNumber = findLandline(practice.phones);
        let website = practice.website;
        let practiceAddress = practice.visit_address.street + "," + practice.visit_address.street2 + ',' + practice.visit_address.state + ',' + practice.visit_address.zip;
        return [practiceName,website,newPatients,practiceAddress];
      });
      let practiceInformation = '';
      practiceInformationArray.forEach(function(practice, i) {
        practiceInformation += '<h4>' + i + '. <a href="'+website+'">' + practice[0] + '</a></h4><p>Accepting new patients: '+ practice[1] + "</p><p>"+practiceAddress+"</p>";
      });
      let doctorName = doctorJSON.data[i].profile.first_name + " " + doctorJSON.data[i].visit_address.last_name;

      output+= '<h3>' + doctorName + '</h3>' + practiceInformation;
    }
  }

  return output;
}


  //obj.data[i].practices.name
  //obj.data[i].visit_address.street, street2, state, zip


function acceptsPatients(boolean){
  if(boolean){
    return "Yes";
  }else{
    return "No";
  }
}

function findLandline(phonesArray){
  let output = 'None';
  for(let i = 0; i<phonesArray.length; i++){
    if(phonesArray[i].type === 'landline'){
      output = phonesArray[i].number;
    }
  }
  return output;
}
