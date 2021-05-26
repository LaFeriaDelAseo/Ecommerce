import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AporteVoluntarioDolaresPage } from './aporte-voluntario-dolares.page';

describe('AporteVoluntarioDolaresPage', () => {
  let component: AporteVoluntarioDolaresPage;
  let fixture: ComponentFixture<AporteVoluntarioDolaresPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AporteVoluntarioDolaresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AporteVoluntarioDolaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
