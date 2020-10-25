import { Component, OnChanges, OnInit } from "@angular/core";
import { MatSliderChange } from "@angular/material/slider";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { SwPush } from "@angular/service-worker";
import { Observable } from "rxjs";
import { ServerPublicKey } from "src/assets/constants";
import { PushNotificationService } from "./push-notification.service";

@Component({
  selector: "push-notification",
  templateUrl: "./push-notification.component.html",
  styleUrls: ["./push-notification.component.scss"],
})
export class PushNotificationComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  notification$: Observable<object>;

  constructor(
    private swPush: SwPush,
    private push: PushNotificationService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if (this.swPush.isEnabled && this.swPush.subscription) {
      const serverPublicKey = ServerPublicKey;
      this.swPush
        .requestSubscription({ serverPublicKey })
        .then((subscription) => {
          this.push.subscribeWebPush(subscription).subscribe((success) => {
            console.log(success);
          });
        });

      this.swPush.messages.subscribe((msg) => {
        const message = JSON.stringify(msg);
        this.snackBar.open(message, "Ok", {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
    }
  }
}
