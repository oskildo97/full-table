import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCharactersComponent } from './list-all-characters.component';

describe('ListAllCharactersComponent', () => {
  let component: ListAllCharactersComponent;
  let fixture: ComponentFixture<ListAllCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
