# _Call a Doctor_

#### _A website utilizing the Better Doctor API, September 13th, 2019_

#### _By **Jennifer Batara**_

## Description

This application is able to return a list of doctors based on the type of search the user utilizes.

## Specifications

|Spec | Input | Output|
|:---:|:------|:------|
|Searches that yield no results returns a message|Location: or-portland <br> Keyword: tooth| No results for query.|
|All locations must be slugs or lat/longitude|Location: or-portland <br> OR <br> Latitude: 45.5051 <br> Longitude: 122.6750 <br> Range: 100 miles <br> Keyword: delivery| <h3>Doctor Name</h3><h4>1. [Practice Name (with website link)](http://randomlinktonowhere)</h4><p>Accepting new patients: Yes</p><p>Address, Address 2, State, Zipcode</p>|
|If more than one doctor is found, and more than one practice per doctor is found, each subsequent practice will be numbered underneath each doctor name.|Location: or-portland <br> Keyword: deliver|<h3>Doctor Name</h3><h4>1. [Practice Name 1 (with website link)](http://randomlinktonowhere)</h4><p>Accepting new patients: Yes</p><p>Address, Address 2, State, Zipcode</p><h4>2. [Practice Name 2 (with website link)](http://randomlinktonowhere)</h4><p>Accepting new patients: Yes</p><p>Address, Address 2, State, Zipcode</p><h3>Doctor Name</h3><h4>1. [Practice Name 1 (with website link)](http://randomlinktonowhere)</h4><p>Accepting new patients: Yes</p><p>Address, Address 2, State, Zipcode</p><h4>2. [Practice Name 2 (with website link)](http://randomlinktonowhere)</h4><p>Accepting new patients: Yes</p><p>Address, Address 2, State, Zipcode</p>|
|If the practice does not have a website, there will be no link on the practice name.|Location: or-portland <br> Keyword: deliver| <h3>Doctor Name</h3><h4>1.Practice Name (without website link)</h4><p>Accepting new patients: Yes</p><p>Address, Address 2, State, Zipcode</p>|

## Setup/Installation Requirements

-   Internet Connection
-   Internet browser
-   Unix Terminal (optional)

To view locally please copy the link to [this repo](https://github.com/jbatara/call-a-doctor) and type the following command into your unix terminal:

$git clone repo_url

with repo_url being the url that was just copied. Open index.html using your internet browser of choice (not compatible with Safari) and determine your Super Galactic Age!

This project is currently not hosted online.

## Known Bugs

_No known bugs have been reported._

## Support and contact details

Please feel free to contact the developer by raising a new [issue](https://github.com/jbatara/call-a-doctor/issues/new) on the github repo. You can browse the current issues [here](https://github.com/jbatara/call-a-doctor/issues).

## Technologies Used

* html
* CSS
* Bootstrap
* ES6
* jQuery
* webpackConfig
* Better Doctor API

### License

_MIT_

Copyright (c) 2019 **_Jennifer Batara_**
