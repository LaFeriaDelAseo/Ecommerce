import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuntaDeAccionComunalPage } from './junta-de-accion-comunal.page';

describe('JuntaDeAccionComunalPage', () => {
  let component: JuntaDeAccionComunalPage;
  let fixture: ComponentFixture<JuntaDeAccionComunalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JuntaDeAccionComunalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuntaDeAccionComunalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
