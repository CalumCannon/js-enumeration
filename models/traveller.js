const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const arr = [];
  this.journeys.forEach((journey) => {
    arr.push(journey.startLocation);
  });
  return arr;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const arr = [];
  this.journeys.forEach((journey) => {
    arr.push(journey.endLocation);
  });
  return arr;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const arr = [];
  this.journeys.forEach((journey) => {

    if(journey.transport === transport){
    arr.push(journey);
    }

  });
  return arr;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let arr = [];
  this.journeys.forEach((journey) => {

    if(journey.distance > minDistance){
    arr.push(journey);
    }

  });
  return arr;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total =0;
  this.journeys.forEach((journey) => {
    total += journey.distance;
  });
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let object = {};

  const result = numbers.map(() => {}); 

  this.journeys.map((journey) => {

    if(!object.contains(journey.transport)){
    minJourney += journey.transport;
    }

  });
  return object;
};


module.exports = Traveller;
