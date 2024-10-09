import { Component } from '@angular/core';
import { MainCardComponent } from '../../../Share/main-card/main-card.component';
import { StandardHeaderComponent } from '../../../Share/standard-header/standard-header.component';
import { StandardFooterComponent } from '../../../Share/standard-footer/standard-footer.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MainCardComponent,StandardHeaderComponent,StandardFooterComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
