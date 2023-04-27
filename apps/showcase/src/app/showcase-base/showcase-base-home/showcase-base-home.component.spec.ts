import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowcaseBaseHomeComponent } from './showcase-base-home.component';

describe('ShowcaseBaseHomeComponent', () => {
  let component: ShowcaseBaseHomeComponent;
  let fixture: ComponentFixture<ShowcaseBaseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcaseBaseHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowcaseBaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
