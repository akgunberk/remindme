import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';




const MaterialComponents = [
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSliderModule,
    MatToolbarModule
];

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents],
})
export class MaterialModule { }
