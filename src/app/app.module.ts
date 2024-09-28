import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';

// Pipes
import { TruncatePipe } from './truncate.pipe';

// Components
import { DrHomeComponent } from './DevRouter/dr-home/dr-home.component';
import { CgHomeComponent } from './CSSGenie/cg-home/cg-home.component';
import { CgEditorComponent } from './CSSGenie/cg-editor/cg-editor.component';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    DrHomeComponent,
    CgHomeComponent,
    CgEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    DragDropModule,
    MatTooltipModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
