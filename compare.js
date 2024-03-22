export function compare(userNumber, randNumber) {
	if (userNumber < randNumber) {
		return 'A te számod kisebb...';
	} else if (userNumber > randNumber) {
		return 'A te számod nagyobb';
	} else {
		return 'Helyes megfejtés!';
	}
}
