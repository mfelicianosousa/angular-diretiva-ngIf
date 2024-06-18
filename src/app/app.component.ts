import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isView = true;
  
  pessoa: any = {
    status: 1,
    name: undefined,
  }

  onToggleProp(){
    
    this.isView = !this.isView;
  }

  isTrusthy(){
    //return {};	
     // return [];
    // return true;
    // return 1;
    // return “teste”;
    // return “0”;
          // return “false”;
    return this.pessoa.status;
  }
  isFalsy(){
   // return false;	
   return 0;
    // return "";
    // return '';
    // return null;
    // return undefined;
    // return -0;
    // return NaN;
    //return this.pessoa.name ;
    return this.pessoa.endereco?.rua;
  }
  
}
