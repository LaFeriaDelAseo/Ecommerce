import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AporteVoluntarioPesosPage } from './aporte-voluntario-pesos.page';

describe('AporteVoluntarioPesosPage', () => {
  let component: AporteVoluntarioPesosPage;
  let fixture: ComponentFixture<AporteVoluntarioPesosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AporteVoluntarioPesosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AporteVoluntarioPesosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
