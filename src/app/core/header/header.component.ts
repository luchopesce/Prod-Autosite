import { Component, Input } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() logo!: string;
}
