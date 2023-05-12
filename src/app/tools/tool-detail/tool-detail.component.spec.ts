import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolDetailComponent } from './tool-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToolsService } from '../tools.service';

describe('ToolDetailComponent', () => {
  let component: ToolDetailComponent;
  let fixture: ComponentFixture<ToolDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolDetailComponent ],
      imports: [HttpClientTestingModule],
      providers: [ToolsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});