import { Component, OnInit } from '@angular/core';
import { PowerService } from '../services/power.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  base = 1;
  exponent = 1;
  result = '';

  constructor(private powerService: PowerService) { }

  ngOnInit(): void {
  }

  handleClick(){
    this.result = this.powerService.power(this.base, this.exponent).toString();
  }


}
