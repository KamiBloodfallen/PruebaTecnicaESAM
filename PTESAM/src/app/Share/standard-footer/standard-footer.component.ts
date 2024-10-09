import { Component } from '@angular/core';
import { MediaSocialButtonComponent } from '../media-social-button/media-social-button.component';

@Component({
  selector: 'app-standard-footer',
  standalone: true,
  imports: [MediaSocialButtonComponent],
  templateUrl: './standard-footer.component.html',
  styleUrl: './standard-footer.component.css'
})
export class StandardFooterComponent {

}
