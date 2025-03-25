import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-move',
  standalone: false,
  templateUrl: './mouse-move.component.html',
  styleUrl: './mouse-move.component.scss',
})
export class MouseMoveComponent {
  isOn: boolean = true;
  currMousePosition: {
    x: number;
    y: number;
  } = { x: 0, y: 0 };

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isOn) {
      this.currMousePosition = {
        ...this.currMousePosition,
        x: event.screenX,
        y: event.screenY,
      };
    }
  }

  onToggleIsOn(): void {
    this.isOn = !this.isOn;
  }
}
