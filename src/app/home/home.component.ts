import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Item } from 'plugins/ng2-simple-dropdown/ng2-simple-dropdown.module';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ModalService } from 'plugins/modal/services/index';
import {AuthService} from "../services/auth.service";
import {Angular2TokenService} from "angular2-token";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   //https://codecraft.tv/courses/angular/forms/model-driven-validation/
   @Output() onFormResult = new EventEmitter<any>();
  constructor(private _sanitizer: DomSanitizer ,
    private modalService: ModalService,
    public authService:AuthService,
    private tokenAuthService:Angular2TokenService,
    public authTokenService:Angular2TokenService) {
    this.addNewSlide();
    const adults_data = { };
    this.savedAdults = [
      new Item('0 Adults'),
      new Item('1 Adult'),
      new Item('2 Adults', adults_data),
      new Item('3 Adults', adults_data),
      new Item('4 Adults', adults_data),
      new Item('5 Adults', adults_data),
      new Item('6 Adults', adults_data),
      new Item('7 Adults', adults_data),
    ];
    const kids_data = { };
    this.savedKids = [
      new Item('0 Kids(Under 14)'),
      new Item('1 Kid'),
      new Item('2 Kids', kids_data),
      new Item('3 Kids', kids_data),
      new Item('4 Kids', kids_data),
      new Item('5 Kids', kids_data),
      new Item('6 Kids', kids_data),
    ];
    const infants_data = { };
    this.savedInfants = [
      new Item('0 Lap Infants(Under 2)'),
      new Item('1 Lap Infant'),
    ];
    const rooms_data = { };
    this.savedRooms = [
      new Item('1 Room'),
      new Item('2 Rooms'),
      new Item('3 Rooms', rooms_data),
      new Item('4 Rooms', rooms_data)
    ];
    const categories_data = { };
    this.categories = [
      new Item('TRUEBLUE'),
      new Item('My TrueBlue Home'),
      new Item('Activity History', categories_data),
      new Item('Buy Points', categories_data),
      new Item('Request Points', categories_data),
      new Item('Request Points', categories_data),
      new Item('Wishlist', categories_data),
      new Item('Badges', categories_data),
      new Item('TrueBlue Profile', categories_data),
      new Item('Manage Flights', categories_data),
      new Item('Plan a Trip', categories_data),
      new Item('Our Partners', categories_data)
    ];
  }
  signInUser = {
    email: '',
    password: ''
  };
  autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  savedAdults: Item[] = [];
  selectedAdult: Item;
  defaultSelectAdult = '1 Adult';
  savedRooms: Item[] = [];
  selectedRoom: Item;
  defaultSelectRoom = '1 Room';
  savedKids: Item[] = [];
  selectedKid: Item;
  defaultSelectKid = '0 Kids(Under 14)';

  savedInfants: Item[] = [];
  selectedInfant: Item;
  defaultSelectInfant = '0 Lap Infants(Under 2)';

  categories: Item[] = [];
  selectedCategory: Item;
  defaultCategory = 'TRUEBLUE';

  urlVariable:string;
  images:Array<any>;
  tripData = [{"id": 1, "name": "RoundTrip"},{"id": 2, "name": "One-way"}];
  tripCashData = [{"id": 5, "name": "Cash"},{"id": 6, "name": "Cash+Points"}];
  tripPointData = [{"label": 3, "name": "Dollars"},{"label": 4, "name": "TrueBlue Points"}];
  mySource = [{"name": "Afghanistan","code": "AF"},{"name": "AlandIslands","code": "AX"},{"name": "Albania","code": "AL"},{"name": "Algeria","code": "DZ"},{"name": "AmericanSamoa","code": "AS"},{"name": "AndorrA","code": "AD"},{"name": "Angola","code": "AO"},{"name": "Anguilla","code": "AI"},{"name": "Antarctica","code": "AQ"},{"name": "AntiguaandBarbuda","code": "AG"},{"name": "Argentina","code": "AR"},{"name": "Armenia","code": "AM"},{"name": "Aruba","code": "AW"},{"name": "Australia","code": "AU"},{"name": "Austria","code": "AT"},{"name": "Azerbaijan","code": "AZ"},{"name": "Bahamas","code": "BS"},{"name": "Bahrain","code": "BH"},{"name": "Bangladesh","code": "BD"},{"name": "Barbados","code": "BB"},{"name": "Belarus","code": "BY"},{"name": "Belgium","code": "BE"},{"name": "Belize","code": "BZ"},{"name": "Benin","code": "BJ"},{"name": "Bermuda","code": "BM"},{"name": "Bhutan","code": "BT"},{"name": "Bolivia","code": "BO"},{"name": "BosniaandHerzegovina","code": "BA"},{"name": "Botswana","code": "BW"},{"name": "BouvetIsland","code": "BV"},{"name": "Brazil","code": "BR"},{"name": "BritishIndianOceanTerritory","code": "IO"},{"name": "BruneiDarussalam","code": "BN"},{"name": "Bulgaria","code": "BG"},{"name": "BurkinaFaso","code": "BF"},{"name": "Burundi","code": "BI"},{"name": "Cambodia","code": "KH"},{"name": "Cameroon","code": "CM"},{"name": "Canada","code": "CA"},{"name": "CapeVerde","code": "CV"},{"name": "CaymanIslands","code": "KY"},{"name": "CentralAfricanRepublic","code": "CF"},{"name": "Chad","code": "TD"},{"name": "Chile","code": "CL"},{"name": "China","code": "CN"},{"name": "ChristmasIsland","code": "CX"},{"name": "Cocos(Keeling)Islands","code": "CC"},{"name": "Colombia","code": "CO"},{"name": "Comoros","code": "KM"},{"name": "Congo","code": "CG"},{"name": "Congo,    TheDemocraticRepublicofthe","code": "CD"},{"name": "CookIslands","code": "CK"},{"name": "CostaRica","code": "CR"},{"name": "CoteD\"Ivoire","code": "CI"},{"name": "Croatia","code": "HR"},{"name": "Cuba","code": "CU"},{"name": "Cyprus","code": "CY"},{"name": "CzechRepublic","code": "CZ"},{"name": "Denmark","code": "DK"},{"name": "Djibouti","code": "DJ"},{"name": "Dominica","code": "DM"},{"name": "DominicanRepublic","code": "DO"},{"name": "Ecuador","code": "EC"},{"name": "Egypt","code": "EG"},{"name": "ElSalvador","code": "SV"},{"name": "EquatorialGuinea","code": "GQ"},{"name": "Eritrea","code": "ER"},{"name": "Estonia","code": "EE"},{"name": "Ethiopia","code": "ET"},{"name": "FalklandIslands(Malvinas)","code": "FK"},{"name": "FaroeIslands","code": "FO"},{"name": "Fiji","code": "FJ"},{"name": "Finland","code": "FI"},{"name": "France","code": "FR"},{"name": "FrenchGuiana","code": "GF"},{"name": "FrenchPolynesia","code": "PF"},{"name": "FrenchSouthernTerritories","code": "TF"},{"name": "Gabon","code": "GA"},{"name": "Gambia","code": "GM"},{"name": "Georgia","code": "GE"},{"name": "Germany","code": "DE"},{"name": "Ghana","code": "GH"},{"name": "Gibraltar","code": "GI"},{"name": "Greece","code": "GR"},{"name": "Greenland","code": "GL"},{"name": "Grenada","code": "GD"},{"name": "Guadeloupe","code": "GP"},{"name": "Guam","code": "GU"},{"name": "Guatemala","code": "GT"},{"name": "Guernsey","code": "GG"},{"name": "Guinea","code": "GN"},{"name": "Guinea-Bissau","code": "GW"},{"name": "Guyana","code": "GY"},{"name": "Haiti","code": "HT"},{"name": "HeardIslandandMcdonaldIslands","code": "HM"},{"name": "HolySee(VaticanCityState)","code": "VA"},{"name": "Honduras","code": "HN"},{"name": "HongKong","code": "HK"},{"name": "Hungary","code": "HU"},{"name": "Iceland","code": "IS"},{"name": "India","code": "IN"},{"name": "Indonesia","code": "ID"},{"name": "Iran,IslamicRepublicOf","code": "IR"},{"name": "Iraq","code": "IQ"},{"name": "Ireland","code": "IE"},{"name": "IsleofMan","code": "IM"},{"name": "Israel","code": "IL"},{"name": "Italy","code": "IT"},{"name": "Jamaica","code": "JM"},{"name": "Japan","code": "JP"},{"name": "Jersey","code": "JE"},{"name": "Jordan","code": "JO"},{"name": "Kazakhstan","code": "KZ"},{"name": "Kenya","code": "KE"},{"name": "Kiribati","code": "KI"},{"name": "Korea,DemocraticPeople\"SRepublicof","code": "KP"},{"name": "Korea,Republicof","code": "KR"},{"name": "Kuwait","code": "KW"},{"name": "Kyrgyzstan","code": "KG"},{"name": "LaoPeople\"SDemocraticRepublic","code": "LA"},{"name": "Latvia","code": "LV"},{"name": "Lebanon","code": "LB"},{"name": "Lesotho","code": "LS"},{"name": "Liberia","code": "LR"},{"name": "LibyanArabJamahiriya","code": "LY"},{"name": "Liechtenstein","code": "LI"},{"name": "Lithuania","code": "LT"},{"name": "Luxembourg","code": "LU"},{"name": "Macao","code": "MO"},{"name": "Macedonia,TheFormerYugoslavRepublicof","code": "MK"},{"name": "Madagascar","code": "MG"},{"name": "Malawi","code": "MW"},{"name": "Malaysia","code": "MY"},{"name": "Maldives","code": "MV"},{"name": "Mali","code": "ML"},{"name": "Malta","code": "MT"},{"name": "MarshallIslands","code": "MH"},{"name": "Martinique","code": "MQ"},{"name": "Mauritania","code": "MR"},{"name": "Mauritius","code": "MU"},{"name": "Mayotte","code": "YT"},{"name": "Mexico","code": "MX"},{"name": "Micronesia,FederatedStatesof","code": "FM"},{"name": "Moldova,Republicof","code": "MD"},{"name": "Monaco","code": "MC"},{"name": "Mongolia","code": "MN"},{"name": "Montserrat","code": "MS"},{"name": "Morocco","code": "MA"},{"name": "Mozambique","code": "MZ"},{"name": "Myanmar","code": "MM"},{"name": "Namibia","code": "NA"},{"name": "Nauru","code": "NR"},{"name": "Nepal","code": "NP"},{"name": "Netherlands","code": "NL"},{"name": "NetherlandsAntilles","code": "AN"},{"name": "NewCaledonia","code": "NC"},{"name": "NewZealand","code": "NZ"},{"name": "Nicaragua","code": "NI"},{"name": "Niger","code": "NE"},{"name": "Nigeria","code": "NG"},{"name": "Niue","code": "NU"},{"name": "NorfolkIsland","code": "NF"},{"name": "NorthernMarianaIslands","code": "MP"},{"name": "Norway","code": "NO"},{"name": "Oman","code": "OM"},{"name": "Pakistan","code": "PK"},{"name": "Palau","code": "PW"},{"name": "PalestinianTerritory,Occupied","code": "PS"},{"name": "Panama","code": "PA"},{"name": "PapuaNewGuinea","code": "PG"},{"name": "Paraguay","code": "PY"},{"name": "Peru","code": "PE"},{"name": "Philippines","code": "PH"},{"name": "Pitcairn","code": "PN"},{"name": "Poland","code": "PL"},{"name": "Portugal","code": "PT"},{"name": "PuertoRico","code": "PR"},{"name": "Qatar","code": "QA"},{"name": "Reunion","code": "RE"},{"name": "Romania","code": "RO"},{"name": "RussianFederation","code": "RU"},{"name": "RWANDA","code": "RW"},{"name": "SaintHelena","code": "SH"},{"name": "SaintKittsandNevis","code": "KN"},{"name": "SaintLucia","code": "LC"},{"name": "SaintPierreandMiquelon","code": "PM"},{"name": "SaintVincentandtheGrenadines","code": "VC"},{"name": "Samoa","code": "WS"},{"name": "SanMarino","code": "SM"},{"name": "SaoTomeandPrincipe","code": "ST"},{"name": "SaudiArabia","code": "SA"},{"name": "Senegal","code": "SN"},{"name": "SerbiaandMontenegro","code": "CS"},{"name": "Seychelles","code": "SC"},{"name": "SierraLeone","code": "SL"},{"name": "Singapore","code": "SG"},{"name": "Slovakia","code": "SK"},{"name": "Slovenia","code": "SI"},{"name": "SolomonIslands","code": "SB"},{"name": "Somalia","code": "SO"},{"name": "SouthAfrica","code": "ZA"},{"name": "SouthGeorgiaandtheSouthSandwichIslands","code": "GS"},{"name": "Spain","code": "ES"},{"name": "SriLanka","code": "LK"},{"name": "Sudan","code": "SD"},{"name": "Suriname","code": "SR"},{"name": "SvalbardandJanMayen","code": "SJ"},{"name": "Swaziland","code": "SZ"},{"name": "Sweden","code": "SE"},{"name": "Switzerland","code": "CH"},{"name": "SyrianArabRepublic","code": "SY"},{"name": "Taiwan,ProvinceofChina","code": "TW"},{"name": "Tajikistan","code": "TJ"},{"name": "Tanzania,UnitedRepublicof","code": "TZ"},{"name": "Thailand","code": "TH"},{"name": "Timor-Leste","code": "TL"},{"name": "Togo","code": "TG"},{"name": "Tokelau","code": "TK"},{"name": "Tonga","code": "TO"},{"name": "TrinidadandTobago","code": "TT"},{"name": "Tunisia","code": "TN"},{"name": "Turkey","code": "TR"},{"name": "Turkmenistan","code": "TM"},{"name": "TurksandCaicosIslands","code": "TC"},{"name": "Tuvalu","code": "TV"},{"name": "Uganda","code": "UG"},{"name": "Ukraine","code": "UA"},{"name": "UnitedArabEmirates","code": "AE"},{"name": "UnitedKingdom","code": "GB"},{"name": "UnitedStates","code": "US"},{"name": "UnitedStatesMinorOutlyingIslands","code": "UM"},{"name": "Uruguay","code": "UY"},{"name":"Uzbekistan","code": "UZ"},{"name": "Vanuatu","code": "VU"},{"name": "Venezuela","code": "VE"},{"name": "VietNam","code": "VN"},{"name": "VirginIslands,British","code": "VG"},{"name": "VirginIslands,U.S.","code": "VI"},{"name": "WallisandFutuna","code": "WF"},{"name": "WesternSahara","code": "EH"},{"name": "Yemen","code": "YE"},{"name": "Zambia","code": "ZM"},{"name": "Zimbabwe","code": "ZW"}];
  tripSelect: string;
  tripPointSelect: string;
  tripCashSelect: string;
  flight_check = true;
  checkin_status = false;
  fl_status = true;
  fl_hotel_status = false;
  isOpen = true;
  flight_status = false;
  error_session = false;
  ngOnInit() {
    // image silde show functionality
        this.tripSelect = '1';
        this.tripPointSelect = '3';
        this.tripCashSelect = '5';
        var i = 0;
        this.images = [];
        var time = 3000;

        // Image list
        this.images[0] = 'assets/images/slider/slide_1.jpg';
        this.images[1] = 'assets/images/slider/slide_2.jpg';
        this.images[2] = 'assets/images/slider/slide_3.jpg';

        this.urlVariable = this.images[0];
        setInterval(()=>{
          let index = this.getNumber();
          if(index<3){
            this.urlVariable = this.images[index];
          }
        },2000)

    // image silde show functionality end
  }
  logOut(){
    this.authService.logOutUser().subscribe();
    this.signInUser.password = '';
    this.signInUser.email = '';
  }
  gotoLogin(){
    this.error_session = false;
    this.signInUser.password = '';
  }
  onSignInSubmit(){

    this.tokenAuthService.signIn(this.signInUser).subscribe(

            res => {              
              if(res.status == 200){
                this.onFormResult.emit({signedIn: true, res});
                this.error_session = false ;
              }
            },

            err => {
              console.log('err:', err);
              this.onFormResult.emit({signedIn: false, err});
              this.error_session = true ;
            }
        )
  }
  private NextPhotoInterval:number = 3000;
  //Looping or not
  // private noLoopSlides:boolean = false;
  //Photos
  private slides:Array<any> = [];
  private addNewSlide() {
       this.slides.push(
          {image:'assets/images/slider/slide_1.jpg'},
          {image:'assets/images/slider/slide_2.jpg'},
          {image:'assets/images/slider/slide_3.jpg'}
      );
  }
  setImage(index:number){
     this.urlVariable = this.images[index];
  }
  expression():void{
    alert('checking date close');
  }

  getNumber():number{
    return Math.floor((Math.random() * 3) + 1);
  }
  changeTripOptions():void{
  }
  changeTripPointOptions():void{
  }
  openCheckIn():void{
    this.checkin_status = true;
    this.flight_check = false;
    this.flight_status = false;
  }
  openFlightsIn():void{
    this.fl_status = true;
    this.fl_hotel_status = false;
  }
  openHotelsIn():void{
    this.fl_status = false;
    this.fl_hotel_status = true;
  }
  openFlightStatus():void{
    this.checkin_status = false;
    this.flight_check = false;
    this.flight_status = true;
  }
  closeCheckIn():void{
    this.checkin_status = false;
    this.flight_check = true;
    this.flight_status = false;
  }
  closeFlightStatus():void{
    this.checkin_status = false;
    this.flight_check = true;
    this.flight_status = false;
  }
  openModal(id: string){
      this.modalService.open(id);
  }

  closeModal(id: string){
      this.modalService.close(id);
  }

}
