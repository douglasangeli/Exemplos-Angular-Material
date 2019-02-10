import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
    selector: 'app-bottom-sheet-overview-example-sheet',
    templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheetComponent {

    constructor(
        private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>
    ) { }

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
