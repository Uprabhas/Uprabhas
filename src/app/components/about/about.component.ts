import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  getprint(){
    const pdfpath = '/prabhas_resume.pdf';

    const newtab = window.open(pdfpath, '_blank');

    if (newtab){
      newtab.onload = function () {
        newtab.print();
      }
    }else{
      alert("something went wrong");
    }
  }

}
