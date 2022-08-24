import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = [
    {name: 'About', href: '#about'},
    {name: 'Experience', href: '#experience'},
    // {name: 'Projects', href: '#projects'},
    {name: 'Skills', href: '#skills'},
    {name: 'Education', href: '#education'},
    {name: 'Contact', href: '#contact'},
  ]
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {
    let scrollHeight = 550


    if (window.scrollY >= scrollHeight) {
      document.body.style.setProperty('--navbar-scroll', "var(--darkest-color)");
      document.body.style.setProperty('--navbar-scroll-text', "var(--lightest-color)");
    } else if (window.scrollY < scrollHeight) {
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-text', "var(--lightest-color)");
    }
  }

}
