import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private barcodeScanner: BarcodeScanner,
    public loadingController: LoadingController,
    private router: Router,
    private menuCtrl: MenuController
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  scanearQr() {
    this.barcodeScanner.scan().then((barcodeData: BarcodeScanResult) => {
      this.router.navigate(['/mensaje']);
       // console.log(barcodeData.text);
      try {
        console.log(barcodeData);
        const persona = JSON.parse(barcodeData.text);
        console.log( persona );

      } catch (e) {
        // console.log(e);
      }
      this.router.navigate(['mensaje']);
      // console.log('Barcode data', persona);
    }).catch((err) => {
      console.log('Error', err);
    });
  }
}
