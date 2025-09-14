import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInLine } from './componente-in-line';

describe('ComponenteInLine', () => {
  let component: ComponenteInLine;
  let fixture: ComponentFixture<ComponenteInLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteInLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteInLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
