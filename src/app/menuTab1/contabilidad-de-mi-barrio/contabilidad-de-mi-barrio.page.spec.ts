import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContabilidadDeMiBarrioPage } from './contabilidad-de-mi-barrio.page';

describe('ContabilidadDeMiBarrioPage', () => {
  let component: ContabilidadDeMiBarrioPage;
  let fixture: ComponentFixture<ContabilidadDeMiBarrioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContabilidadDeMiBarrioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContabilidadDeMiBarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
