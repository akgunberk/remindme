import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { Observable } from 'rxjs';

@Component({
  selector: 'update-app',
  templateUrl: './update-app.component.html',
  styleUrls: ['./update-app.component.scss']
})
export class UpdateAppComponent implements OnInit {

  @ViewChild('content', { static: true }) content: TemplateRef<any>;

  updateAvailable$: Observable<UpdateAvailableEvent>;

  constructor(private swUpdate: SwUpdate, private dialog: MatDialog) { }

  ngOnInit() {
    this.swUpdate.available.subscribe((_) => {
      this.dialog.open(this.content);
    })

  }

  reload() {
    document.location.reload();
  }

}
