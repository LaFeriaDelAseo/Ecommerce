import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmprendimientosDeMiBarrioPage } from './emprendimientos-de-mi-barrio.page';

describe('EmprendimientosDeMiBarrioPage', () => {
  let component: EmprendimientosDeMiBarrioPage;
  let fixture: ComponentFixture<EmprendimientosDeMiBarrioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprendimientosDeMiBarrioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmprendimientosDeMiBarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
