import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  input: string = "";
  result: string = "";

  pressNum(num: string) {
    if (num == ".") {
      if (this.input != "") {
        const lastNum = this.getLastOperand();
        console.log(lastNum.lastIndexOf("."));
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
    if (num == "0") {
      if (this.input == "") {
        return;
      }

      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === "-" || PrevKey === '+')
        return;
    }
    this.input = this.input + num
    this.calculateAnswer()
  }
  getLastOperand() {
    let pos: number;
    console.log(this.input);
    pos = this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos)
      pos = this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos)
      pos = this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos)
      pos = this.input.lastIndexOf("/")
    return this.input.substr(pos + 1)
  }


  pressOperator(op: string) {
    const lastOp = this.input[this.input.length - 1];
    if (lastOp === '/' || lastOp === '*' || lastOp === '-' || lastOp === '+') {
      return;
    }
    this.input = this.input + op;
    this.calculateAnswer();
  }

  calculateAnswer() {

    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    if (lastKey === ".") {
      formula = formula.substr(0, formula.length - 1)
    }
    lastKey = formula[formula.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      formula = formula.substr(0, formula.length - 1)
    }
    console.log(formula);
    this.result = eval(formula);

  }
  getAnswer() {
    this.calculateAnswer();
    this.input = this.result;
    if (this.input == "0")
      this.input = "";
  }

  clear() {
    if (this.input != "") {
      this.input = this.input.substr(0, this.input.length - 1)
    }
  }
  allClear() {
    this.input = "";
    this.result = "";
  }
}
