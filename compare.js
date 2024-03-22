export function compare(userNumber, randNumber) {
  if (userNumber < randNumber) {
    return "A te számod kisebb...";
  } else if (userNumber > randNumber) {
    return "A te számod nagyobb!";
  } else if (userNumber == randNumber) {
    return "Helyes megfejtés AZ OTT!4!!44!4!";
  }
}
