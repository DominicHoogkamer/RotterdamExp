import { Geolocation } from '@ionic-native/geolocation';
import { MarkerdetailLocalPage } from './../markerdetail-local/markerdetail-local';
import { locationModel } from './../../models/locations-model';
import { MarkerdetailPage } from './../markerdetail/markerdetail';
import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {
  private ToastController: any;
  private checkIfLocals: boolean = false;
  private locationsArray: any[];
  private profileImg: string = ''


      private locals = [
	  {
          title: 'What would you rate this attraction?1',
		  lat: 51.925316,
		  lng: 4.476542,
		  label: 'A',
		  draggable: true
	  },
	  {
          title: 'What would you rate this attraction?2',
		  lat: 51.925223,
		  lng: 4.478345,
		  label: 'B',
		  draggable: false
	  },
	  {
          title: 'What would you rate this attraction?3',
		  lat: 51.924773,
		  lng: 4.479139,
		  label: 'C',
		  draggable: true
	  }
  ]
  
  lat: number;
  lng: number;


  public styles = [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "gamma": "0.42"
            },
            {
                "saturation": "100"
            },
            {
                "hue": "#0cff00"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#37bda2"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#37bda2"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e4dfd9"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#37bda2"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#70b99b"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fafeb8"
            },
            {
                "weight": "1.25"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#5ddad6"
            }
        ]
    }
]

  constructor(
      public modalCtrl: ModalController, 
      public lm:locationModel,
      public geolocation: Geolocation,
      public loadingCtrl: LoadingController,
      public toastCrtl: ToastController) {

    this.getData();
    let img = JSON.parse(localStorage.getItem('userObject'));
    this.profileImg = img[0].profileImg;
    
  }
  
  getData() {
    this.locationsArray = this.lm.getArray();
  }

  getLocation() {
       const loader = this.loadingCtrl.create({
            content: "Searching for your location",
        });
        loader.present();

        this.geolocation.getCurrentPosition().then((position) => {
            loader.dismiss();
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
        }
    )
    .catch(
        error => {
            loader.dismiss();
            const toast = this.ToastController.craete({
                message: "Could get location, please pick it manually",
                duration: 2500
            });
            toast.present();
        }
    )
  }


  localCheck(check) {
    this.checkIfLocals = check;
  }

  onMarkerClick(m) {
    let checkModal = this.modalCtrl.create(MarkerdetailPage, {markerData: m});
    checkModal.present();
  }

  onMarkerClickLocals(m) {
    let checkModal = this.modalCtrl.create(MarkerdetailLocalPage, {markerData: m});
    checkModal.present();
  }

  


}
