import * as Location from "expo-location";

const tenMeterWithDegrees = 0.0001;

const getLocation = (increamnet) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312186 + increamnet * tenMeterWithDegrees,
      latitude: 37.33233141 + increamnet * tenMeterWithDegrees,
      // longitude: -122 + increamnet * tenMeterWithDegrees,
      // latitude: 37 + increamnet * tenMeterWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
