export class locationModel {

	private locations = [
		{
			title: 'Urban Cycling Route',
            description: 'Our full body 45 & 60-minute workouts on a bike are uplifting experiences. Set to candlelight and fueled by epic beats, our classes are made to give you that natural high. Ride the energy of the pack as you pedal out of the saddle for most of the class, training your core, and raising your heart rate.',
			lat: 51.924420,
			lng: 4.477733,
			imgUrl: 'http://rocyclestudios.com/wp-content/uploads/2016/02/A_Rocycle_dumbels_01-710x1004.jpg'
		},
		{
			title: 'Graffity Tour Rotterdam',
			lat: 51.924509,
			lng: 4.476435,
            description: 'Rewriters maakt zich hard voor straatkunst (graffiti & street art) in Rotterdam. Wij bieden Rotterdamse straatkunstenaars een platform in hun eigen stad zodat zij hun eigen werk kunnen etaleren in de buitenruimte. Een aantal Rotterdamse kunstenaars zijn inmiddels populair in het buitenland en worden dan ook over de hele wereld gevraagd voor muurschilderingen en exposities.',
			imgUrl: 'http://www.dutchgraffiti.com/wp-content/uploads/2016/06/20160610graffiti-rotterdam05.jpg'
		},
		{
			title: 'Yoga Lessons',
			lat: 51.924522,
			lng: 4.479632,
            description: 'We invite you to discover the beauty of yoga, pilates and meditation in a relaxed and friendly atmosphere.',
			imgUrl: 'http://dailylin.nl/wp-content/uploads/2014/04/IMG_0406-1024x682.jpg'
		},
		{
			title: 'market Meastro',
			lat: 51.925581,
			lng: 4.474161,
            description: 'I’ve been in the foodie scene for over a decade. From working in some of Rotterdam’s most renowned markets to taste testing the city’s hidden treasures, I know the tastiest eateries off the beaten path.',
			imgUrl: 'https://a0.muscache.com/im/pictures/5a5e945f-e4f9-4cfd-a98e-aee6c9558ed5.jpg?aki_policy=large'
		}
	]

	constructor() {

	}

	getArray() {
		return this.locations.slice();
	}
}