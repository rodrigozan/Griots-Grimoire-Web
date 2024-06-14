import { Component } from '@angular/core'
import { TimelineComponent } from '../../components/home/timeline/timeline.component'

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponentPage {

}
