import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSuccessComponent } from './client.success.component';

describe('ClientSuccessComponent', () => {
  let component: ClientSuccessComponent;
  let fixture: ComponentFixture<ClientSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
