import { Component, Host, HostListener } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent , RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  showBtn:boolean=false;
scrollTop(){
  window.scrollTo(0,0);
}
@HostListener("window:scroll")hideBtn(){
  let scrollbar= document.documentElement.scrollTop;
  if(scrollbar > 500){
    this.showBtn=true;
  }else{
    this.showBtn=false; 
  }

}
}
