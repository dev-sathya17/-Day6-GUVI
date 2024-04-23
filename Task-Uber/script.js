// This is a class to calculate the price of a uberRide which helps us calculate the fare for our journey
class UberRide {
  // A constructor to initialize the values
  constructor(peakTime, baseFare, minuteRate, kilometerRate) {
    this.peakTime = peakTime;
    this.baseFare = baseFare;
    this.minuteRate = minuteRate;
    this.kilometerRate = kilometerRate;
  }

  //   The main function to calculate the fare of our trip.
  getPrice(rideDistance, rideDuration, isPeak) {
    let totalFare = Number(this.baseFare);
    const distanceCost = rideDistance * this.kilometerRate;
    const timeCost = rideDuration * this.minuteRate;
    if (isPeak) {
      totalFare += (distanceCost + timeCost) * this.peakTime;
    } else {
      totalFare += distanceCost + timeCost;
    }

    return totalFare;
  }
}

// Creating an instance for our class -> Planning our journey
const ride = new UberRide(200, 100, 2, 5);
const price = ride.getPrice(300, 180, true);
// Consoling the output fare
console.log(price);
