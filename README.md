# Ailleurs's REST API

Welcome on the API of Ailleurs's Project

### Description

This is a minimal API to handle the data of the Ailleurs's project.
This API provides only GET methods to view informations about the different French departments.
All the data aggregated in the data files come from data.gouv.fr or from official French organisations like INSEE...

> BUT it is the fantasy of this app's creator to weigh the importance or not to this or that data. So there is not much objectivity in those results.

### Endpoints definitions

These are the available routes :

**GET /maps/:type**

The route to get a specific classification of the French departments according to a specific criteria : type.

Only three types are available :

-   `security` : a map that agregates data about health and security
-   `family` : a map with criteria about every day life (ride's time to get to work, number of schools...)
-   `environment` : a map that agregates data about organic agriculture, average temperatures and nuclear threat.

The results are arrays of sorted departements with a score out of 100 . For security map,bigger is the score, more secure is the department. For family map, bigger is the score,more pleasant is the daily life. For environment map, bigger is the score, healthier is theenvironment.

| Request Example                     | Response Example                                                                                                                                                                                                                                                 |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http://localhost:3002/maps/security | `mapData: [{ dep_id: "50", dep_name: "Manche", danger_total: "10.76" },{ dep_id: "15", dep_name: "Cantal", danger_total: "11.00" },{ dep_id: "48", dep_name: "Lozère", danger_total: "11.05" },{ dep_id: "53", dep_name: "Mayenne", danger_total: "11.92" }`,... |

**GET /survey**

The route to get the survey.
It returns an array with all the questions of the survey.

| Request Example              | Response Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http://localhost:3002/survey | `surveyData: ["Situation familiale","tranche d'âge","part du télétravail dans votre activité","Craignez-vous d'être cambriolé?","Combien de kilomètres êtes-vous prêt à parcourir pour aller voir votre généraliste?","Est-ce que le nombre d'agressions sur un territoire est un critère important pour vous?","Quelle est la part du bio dans votre alimentation?","Supportez-vous la chaleur?","A quelle distance d'une centrale nucléaire seriez-vous prêt à vous installer?"` |

**GET /survey/:id**

The route to get to a specific question of the survey
It returns an object with the question asked.

| Request Example                | Response Example                                                                                           |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| http://localhost:3002/survey/4 | `{"surveyQuestion":"Combien de kilomètres êtes-vous prêt à parcourir pour aller voir votre généraliste?"}` |

**GET /mymap/?a1={answer1}&a2={answer2}&a3={answer3}...**

The route to get the survey's results.
It returns a sorted array with the classsification of the most convenient French departments for the user's app.

| Request Example                                                           | Response Example                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http://localhost:3002/mymap/?a0=0&a1=3&a2=0&a3=2&a4=0&a5=3&a6=2&a7=3&a8=2 | `{"myMapData":{"dep_id":"74","dep_name":"Haute-Savoie","result":"27.113"},{"dep_id":"29","dep_name":"Finistère","result":"27.410"},{"dep_id":"22","dep_name":"Côtes-d'Armor","result":"27.817"},{"dep_id":"27","dep_name":"Eure","result":"28.007"},{"dep_id":"40","dep_name":"Landes","result":"28.367"},{"dep_id":"45","dep_name":"Loiret","result":"28.403"},{"dep_id":"61","dep_name":"Orne","result":"28.580"},{"dep_id":"75","dep_name":"Paris","result":"28.657"},` |

**GET /departement/:id/**

The route to get the caracteristics of a specific French department.

| Request Example                      | Response Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http://localhost:3002/departement/38 | `departementData: {_id: { $oid: "6167f6fa8dc41272169c2fce" },num_dep: "38",dep_name: "Isère",region_name: "Auvergne-Rhône-Alpes",fiber_ratio: "54.04",schools_number: 1237,total_population: 1288406,total_population_region: 8167945,rideAverageTime: "17",num_assaults: "3798",num_burglaries: "7308",num_healthCenters_10000_inhabitants: 33.78940480133008,num_nuclear_reactors: 2,organic_farming_ratio: "8.61315027849501%",avgTemp: 12.88891710231516,maxTemp: 38.05,minTemp: -10.45,sunlight_hours: "2020"}` |

### Error Handling

Every route parameter and query string is verified with a validator which prints an error message if any.
For other errors, the API returns an appropriate HTTP response code, for example 404 (Not Found), and a JSON response. Any HTTP response code that is not in the range 200 - 299 is considered an error.
