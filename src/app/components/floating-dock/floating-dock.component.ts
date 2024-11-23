import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-floating-dock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-dock.component.html',
  styleUrl: './floating-dock.component.scss',
  animations: [
    trigger('tooltip', [
      state('hidden', style({ opacity: 0, transform: 'translateY(10px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden <=> visible', [animate('150ms ease-in-out')]),
    ]),
  ],
})
export class FloatingDockComponent {
  @Input() items: { title: string; icon: string; href: string }[] = [];
  @Input() desktopClassName = '';
  @Input() mobileClassName = '';
  open = false;

  mouseX = Infinity;
  hoveredItem: string | null = null;

  // Capture mouse position
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.pageX;
  }

  // Reset mouse position
  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouseX = Infinity;
  }

  toggleMobileDock() {
    this.open = !this.open;
  }

  setHoveredItem(title: string) {
    this.hoveredItem = title;
  }

  clearHoveredItem() {
    this.hoveredItem = null;
  }

}
