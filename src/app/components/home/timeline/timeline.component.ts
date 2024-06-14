import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  dateNow = Date.now()
  infos = [
    {
      img: "",
      text: "Texto de teste",
      author: "Autor 1",
      data: this.dataConvert(this.dateNow)
    },
    {
      img: "",
      text: "Um memorando aos autores",
      author: "Autor Primordial",
      data: this.dataConvert(this.dateNow)
    }
  ]

  dataConvert(newData: number){
    const data = new Date(newData)
    const d = data.toLocaleDateString('pt-BR')
    const t = data.toLocaleTimeString('pt-BR')
    return `${d} - ${t}`
  }
}
