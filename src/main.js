import $ from 'jquery';
import {
  getConditions,
  getSpecialties,
  getDoctors
} from './js/promises.js';
import {
  printConditionstoDropDown,
  printSpecialtiestoDropDown,
  printDoctors
} from './js/htmlGenerator.js';
import 'bootstrap';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {

  $('#symptomShow').click(function() {
    $('form').not('#findSymptom').hide();
    $('#findSymptom').show();
    getConditions().then(function(response) {
      let body = JSON.parse(response);
      $('span.symptoms').html(printConditionstoDropDown(body));
    });
  });

  $('#specialtyShow').click(function() {
    $('form').not('#findSpecialty').hide();
    $('#findSpecialty').show();

    getSpecialties().then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $('span.specialty').html(printSpecialtiestoDropDown(body));
    });
  })

  $('#findDoctor').submit(function(event) {
    event.preventDefault();
    let location = $('#location').val();
    let symptom = $('input[name=symptom]').val();

    getDoctors(location, symptom).then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $('.doctors').html(printDoctors(body));
    });
  });

  $('#findSymptom').submit(function(event) {
    event.preventDefault();
    let location = $('#location').val();
    let symptom = $('input[name=symptom]').val();

    getDoctors(location, symptom).then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $('.doctors').html(printDoctors(body));
    });
  });



});
