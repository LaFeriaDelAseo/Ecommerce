import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DerechosyDeberesEnMiBarrioPage } from './derechosy-deberes-en-mi-barrio.page';

describe('DerechosyDeberesEnMiBarrioPage', () => {
  let component: DerechosyDeberesEnMiBarrioPage;
  let fixture: ComponentFixture<DerechosyDeberesEnMiBarrioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DerechosyDeberesEnMiBarrioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DerechosyDeberesEnMiBarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
