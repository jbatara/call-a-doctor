import $ from 'jQuery';
import { getConditions, getDoctors } from  './js/promises.js';
import { printConditionstoDropDown, printDoctors } from './js/htmlGenerator.js';



$(document).ready(function(){
  getConditions.then(function(response){
    debugger;
    let body = JSON.parse(response);
    console.log(body);
    $('span.symptoms').html(printConditionstoDropDown(body));
  });

  $('form').submit(function(event){
    event.preventDefault();
    let location = $('#location').val();
    let symptom = $('input[name=symptom]').val();

    getDoctors(location,symptom).then(function(response){
      let body = JSON.parse(response);
      $('.doctors').html(printDoctors(body));
    });
  });



});
