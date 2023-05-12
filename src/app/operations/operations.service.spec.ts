import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OperationsService } from './operations.service';
import { Operation } from './operation';

describe('OperationsService', () => {
  let service: OperationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OperationsService]
    });

    service = TestBed.inject(OperationsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<Operation[]>', () => {
    const dummyOperations: Operation[] = [
      { id: '1', name: 'Operation 1' },
      { id: '2', name: 'Operation 2' }
    ];

    service.getOperations().subscribe(operations => {
      expect(operations.length).toBe(2);
      expect(operations).toEqual(dummyOperations);
    });

    const request = httpMock.expectOne(service['operationsUrl']);
    expect(request.request.method).toBe('GET');
    request.flush(dummyOperations);
  });
});