import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;

  constructor() {
    this.features =
      [
        {
          name: 'Bootstrap',
          description: 'Bootstrap Description',
          icon: 'fab fa-bootstrap',
          link: 'bootstrap'
        },
        {
          name: 'Reactive Form',
          description: 'Reactive Form Description',
          icon: 'fab fa-bootstrap',
          link: 'reactive-form'
        },
        {
          name: 'Services',
          description: 'Services Description',
          icon: 'fab fa-bootstrap',
          link: 'services'
        },
        {
          name: 'Components',
          description: 'Components Description',
          icon: 'fab fa-bootstrap',
          link: 'components'
        },
        {
          name: 'Template Driven Forms',
          description: 'Template Driven Forms Description',
          icon: 'fab fa-bootstrap',
          link: 'template-driven-forms'
        },
      ];

  }

  ngOnInit(): void {
    this.loadScript('assets/params/js/index.js');
  }

  loadScript(name: string): void {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = name;
    s.async = false;
    document.getElementsByTagName('head')[0].appendChild(s);
  }

}