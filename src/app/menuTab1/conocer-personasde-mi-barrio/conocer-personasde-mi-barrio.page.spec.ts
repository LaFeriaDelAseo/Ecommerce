import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConocerPersonasdeMiBarrioPage } from './conocer-personasde-mi-barrio.page';

describe('ConocerPersonasdeMiBarrioPage', () => {
  let component: ConocerPersonasdeMiBarrioPage;
  let fixture: ComponentFixture<ConocerPersonasdeMiBarrioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocerPersonasdeMiBarrioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConocerPersonasdeMiBarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
