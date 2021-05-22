import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuePuedoHacerEnMiBarrioPage } from './que-puedo-hacer-en-mi-barrio.page';

describe('QuePuedoHacerEnMiBarrioPage', () => {
  let component: QuePuedoHacerEnMiBarrioPage;
  let fixture: ComponentFixture<QuePuedoHacerEnMiBarrioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuePuedoHacerEnMiBarrioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuePuedoHacerEnMiBarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
