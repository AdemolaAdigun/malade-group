import { Component, OnInit, ElementRef, ViewChild } from "@angular/core"
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../../node_modules/keen-slider/keen-slider.min.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("sliderRef")
  sliderRef!: ElementRef<HTMLElement>

  public currentSlide: number = 1
  public dotHelper: Array<Number> = []
  public slider!: KeenSliderInstance

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  ngOnInit(): void {
  }

}
