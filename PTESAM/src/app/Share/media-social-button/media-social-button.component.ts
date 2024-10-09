import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-social-button',
  standalone: true,
  imports: [],
  templateUrl: './media-social-button.component.html',
  styleUrl: './media-social-button.component.css'
})
export class MediaSocialButtonComponent {
@Input() link='';
@Input() imagen='';
}
