import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjetivosDeDesarrolloSostenibleEnMiBarrioPage } from './objetivos-de-desarrollo-sostenible-en-mi-barrio.page';

describe('ObjetivosDeDesarrolloSostenibleEnMiBarrioPage', () => {
  let component: ObjetivosDeDesarrolloSostenibleEnMiBarrioPage;
  let fixture: ComponentFixture<ObjetivosDeDesarrolloSostenibleEnMiBarrioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosDeDesarrolloSostenibleEnMiBarrioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetivosDeDesarrolloSostenibleEnMiBarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
