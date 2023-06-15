// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
const newDrivers=drivers.slice(0,2);
return newDrivers;
}

function returnLastTwoDrivers(drivers){
    const newDrivers=drivers.slice(-2);
    return newDrivers;
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
    const multiplier=5; 
    return fare=>fare*multiplier;
}
function fareDoubler(fare){
    return fare*2;
}

function fareTripler(fare){
    return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers, functionInput){
    return functionInput(arrayOfDrivers);
}