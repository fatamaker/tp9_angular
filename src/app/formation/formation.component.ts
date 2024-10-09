import { Component ,OnInit } from '@angular/core';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit {
  formations ? : Formation [];
  
  constructor(private formationService:  FormationService) {
    
  }
  ngOnInit(): void{
    this.formations = this.formationService.listeFormation();

  }
supprimerFormation(f: Formation)
{

let conf = confirm("Etes-vous sûr ?");
if (conf)
this.formationService.supprimerFormation(f);
}

}