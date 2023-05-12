import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToolsService } from './tools.service';

describe('ToolsService', () => {
  let service: ToolsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ToolsService]
    });
    service = TestBed.inject(ToolsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Tool[]>', () => {
    const dummyTools = [
      { id: '1', idList: 'abc', name: 'Tool 1', url: 'https://www.description1.com' },
      { id: '2', idList: 'abc', name: 'Tool 2', url: 'https://www.description2.com' }
    ];

    const dummyToolDTOs = [
        { id: '1', idList: 'abc', name: 'Tool 1', desc: 'https://www.description1.com' },
        { id: '2', idList: 'abc', name: 'Tool 2', desc: 'https://www.description2.com' }
      ];

    service.getTools('abc').subscribe(tools => {
      expect(tools.length).toBe(2);
      expect(tools).toEqual(dummyTools);
    });

    const req = httpMock.expectOne(`${service['toolsUrl']}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyToolDTOs);
  });
});