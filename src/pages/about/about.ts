import { Globals } from './../../app/global';
import { Geolocation } from '@ionic-native/geolocation';
import { MarkerdetailLocalPage } from './../markerdetail-local/markerdetail-local';
import { locationModel } from './../../models/locations-model';
import { MarkerdetailPage } from './../markerdetail/markerdetail';
import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
})

export class AboutPage {
    private ToastController: any;
    private checkIfLocals: boolean = false;
    private locationsArray: any[];
    private profileImg: string = ''

    private showDirection: boolean = false;
    private DirectionLat: string;
    private DirectionLng: string;
    private RPamount: number;
    private DirectionTitle: string;


    private locals = [
        {
            title: 'Fenix food factory',
            description: 'With a love for food and craft these entrepreneurs found each other more than two years ago in the streets of Rotterdam. A passion was shared, a plan was made and a dream was realised in an old port warehouse on Katendrecht.',
            lat: 51.901840,
            lng: 4.485143,
            imgUrl: 'https://imgserv6.tcdn.nl/v1/A1ERzc2HKB5Xx4jf7WmkhkEvj8E=/704x398/smart/http://metronieuws.tcdn.nl/field/image/f9e05a8af8517f86944fa64bf5af0631-1435841966.jpg'
        },
        {
            title: 'Biergarten',
            description: 'THE BEST THINGS IN LIFE ARE SIMPLE. BEER, BBQ, MUSIC, SUN, AND LOVELY PEOPLE. BIERGARTEN ROTTERDAM IS AN OUTSIDE ONLY BAR. WE OFFER NOTHING MORE OR LESS THEN WHAT YOU EXPECT FROM US. THE PEOPLE MAKE BIERGARTEN BIERGARTEN.',
            lat: 51.925539,
            lng: 4.476246,
            imgUrl: 'https://images1.persgroep.net/rcs/FL3yoDxJWslzkbgdjfRwzL5zZLs/diocontent/102672854/_fill/1350/900/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9'
        },
        {
            title: 'Burgertrut',
            description: 'Burgertrut is a nomadic and affordable hamburger-restaurant. Since 2011 we’ve been enlivening different parts of Rotterdam, welcoming you in our cosy, livingroom-esque set-up.',
            lat: 51.924831,
            lng: 4.474454,
            imgUrl: 'http://imagene.youropi.com/burgertrut-restaurant-rotterdam-3(p:restaurant,14548)(c:0).jpg'
        },
        {
            title: 'Rotown',
            description: 'Rotown is a music venue and a bar-restaurant in Rotterdam, Netherlands. It is located close to the city centre, on the Nieuwe Binnenweg.',
            lat: 51.916892,
            lng: 4.471679,
            imgUrl: 'https://www.rotown.nl/wp-content/uploads/2015/05/Rotown-Photo-Credit-Jan-Bijl.jpg'
        },
        {
            title: 'Bird',
            description: 'Diepgeworteldin de jazz, maar met vertakkingen als soul, funk, hiphop en elektronica ispodium, club en restaurant BIRD dé plek voor de culturele alleseter.',
            lat: 51.926610,
            lng: 4.478955,
            imgUrl: 'http://www.anihaakien.nl/site/wp-content/uploads/BIRD.jpg'
        },
        {
            title: 'Roodkapje',
            description: 'Roodkapje is the communal living-room, project space & underground laboratory for art, music & food. ',
            lat: 51.924869,
            lng: 4.474467,
            imgUrl: 'http://stroom.nl/gfx/uploads/webStipo2.jpg'
        },
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
        public lm: locationModel,
        public geolocation: Geolocation,
        public loadingCtrl: LoadingController,
        public toastCrtl: ToastController,
        private navParams: NavParams,
        private globals: Globals) {

        this.RPamount = globals.rpAmount;

        this.getData();

        if(localStorage.getItem('userObject')){
        let img = JSON.parse(localStorage.getItem('userObject'));
        this.profileImg = img[0].profileImg;
        }



        if (this.RPamount == 0) {
            this.globals.addRP(1);
            this.RPamount = this.globals.getRPAmount();
            const toast = this.toastCrtl.create({
                message: "Achievement You logged in for the first time, you have earned 1 Rotterdam Point!",
                duration: 4000
            });
            toast.present();
            this.loadItems();
        }

    }

    ionViewWillEnter() {
        this.loadItems();
        this.getLocation();
    }


    private loadItems() {
        this.RPamount = this.globals.getRPAmount();
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
                const toast = this.ToastController.create({
                    message: "Could get location, please pick it manually",
                    duration: 4000
                });
                toast.present();
            }
            )
    }


    localCheck(check) {

        this.showDirection = false;
        this.checkIfLocals = check;
    }

    onMarkerClick(m) {
        let checkModal = this.modalCtrl.create(MarkerdetailPage, { markerData: m });
        checkModal.onDidDismiss(data => {
            if (data != null) {
                this.showDirection = true
                this.DirectionLat = data.lat
                this.DirectionLng = data.lng
                this.DirectionTitle = data.title

                const toast = this.toastCrtl.create({
                    message: `De route naar ${this.DirectionTitle} duurt 10 minuten en is ongeveer 200 meter verderop`,
                    duration: 2500,
                });
                toast.present();


            } else {
                this.showDirection = false;
            }

        });
        checkModal.present();
    }

    onMarkerClickLocals(m) {

        let checkModal = this.modalCtrl.create(MarkerdetailLocalPage, { markerData: m });
        checkModal.onDidDismiss(data => {
            if (data != null) {
                this.showDirection = true
                this.DirectionLat = data.lat
                this.DirectionLng = data.lng
                this.DirectionTitle = data.title

                const toast = this.toastCrtl.create({
                    message: `De route naar ${this.DirectionTitle} duurt 10 minuten en is ongeveer 200 meter verderop`,
                    duration: 4000,
                });
                toast.present();


            } else {
                this.showDirection = false;
            }

        });
        checkModal.present();
    }
}
