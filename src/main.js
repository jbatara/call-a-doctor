import {getConditions,getDoctors} from './js/promises.js';
import {printConditionstoDropDown,printDoctors} from './js/htmlGenerator.js';
import $ from 'jquery';



$(document).ready(function() {
  getConditions().then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
    $('span.symptoms').html(printConditionstoDropDown(body));
  });

  $('.findDoctor').submit(function(event) {
    event.preventDefault();

    let location = $('#location').val();
    console.log(location);
    let symptom = $('input[name=symptom]').val();
    console.log(symptom);

    getDoctors(location, symptom).then(function(response) {

      let body = JSON.parse(response);
      console.log(body);
      $('.doctors').html(printDoctors(body));
    });
  });



});
