import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProximosEventosEnMiBarrioPage } from './proximos-eventos-en-mi-barrio.page';

describe('ProximosEventosEnMiBarrioPage', () => {
  let component: ProximosEventosEnMiBarrioPage;
  let fixture: ComponentFixture<ProximosEventosEnMiBarrioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosEventosEnMiBarrioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProximosEventosEnMiBarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
