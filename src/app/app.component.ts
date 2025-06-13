import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <-- Fixed property name from 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'marks-form';
  name = "";
  subject = "";
  marks1 = 0;
  marks2 = 0;
}
