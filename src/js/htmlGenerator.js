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

export function printSpecialtiestoDropDown(specialtiesJSON) {
  let output = '<datalist id="specialties">';
  for(let i=0; i<specialtiesJSON.data.length;i++){
    if(specialtiesJSON.data[i].active){
      let specialty = specialtiesJSON.data[i].uid;
      output += '<option value='+specialty+'>';
    }
  }
  output += '</datalist>';
  return output;
}

export function printDoctors(doctorJSON) {
  let output = '';
  if(doctorJSON.meta.total !== 0){
    for (let i = 0; i < doctorJSON.data.length; i++) {
      let practiceInformationArray = doctorJSON.data[i].practices.map(function(practice) {
        let practiceName = practice.name;
        let newPatients = acceptsPatients(practice.accepts_new_patients);
        let phoneNumber = findLandline(practice.phones);
        let website = validWebsite(practice.website);
        let practiceAddress = secondSt(practice.visit_address);
        return [practiceName,website,newPatients,practiceAddress];
      });
      let practiceInformation = '';

      practiceInformationArray.forEach(function(practice, j) {
        let number = j+1;
        if(practice[1]){
          practiceInformation += '<h4>' + number + '. <a href="'+practice[1]+'">' + practice[0] + '</a></h4><p>Accepting new patients: '+ practice[2] + "</p><p>"+practice[3]+"</p>";
        }else{
          practiceInformation += '<h4>' + number + '. '+ practice[0] + '</h4><p>Accepting new patients: '+ practice[2] + "</p><p>"+practice[3]+"</p>";
        }
      });
      debugger;
      let doctorName = doctorJSON.data[i].profile.first_name + " " + doctorJSON.data[i].profile.last_name;

      output+= '<h3>' + doctorName + '</h3>' + practiceInformation;
    }
  }else{
    output = "No results for query."
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

function validWebsite(website){
  if(website){
    return website;
  } else{
    return '';
  }
}

function secondSt(visit_addressObj){
  if(visit_addressObj.street2){
    return visit_addressObj.street + "," + visit_addressObj.street2 + ',' + visit_addressObj.state + ',' + visit_addressObj.zip;
  } else{
    return visit_addressObj.street + ',' + visit_addressObj.state + ',' + visit_addressObj.zip;
  }
}
