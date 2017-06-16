export class locationModel {
    
    private locations = [
	  {
          title: 'What would you rate this attraction?1',
		  lat: 51.924420,
		  lng: 4.477733,
		  label: 'A',
		  draggable: true
	  },
	  {
          title: 'What would you rate this attraction?2',
		  lat: 51.924509,
		  lng: 4.476435,
		  label: 'B',
		  draggable: false
	  },
	  {
          title: 'What would you rate this attraction?3',
		  lat: 51.924522,
		  lng: 4.479632,
		  label: 'C',
		  draggable: true
	  },
	  {
          title: 'What would you rate this attraction?4',
		  lat: 51.925581,
		  lng: 4.474161,
		  label: 'C',
		  draggable: true
	  }
  ]
    
    constructor() {
        
    }

    getArray() {
        return this.locations.slice();
    }
}