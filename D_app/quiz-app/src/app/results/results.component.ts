import { Component, Input } from '@angular/core';
import { Answers } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent {
  @Input() answers: Answers;

  calculateTotalScore(): number {
    const totalQuestions = this.answers.values.length;
    const correctAnswers = this.answers.values.filter(a => a.correct).length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    return Math.round(scorePercentage);
  }
  
}
