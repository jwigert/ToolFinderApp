import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Operation } from './operation';
import { environment } from '../../environments/environment';

interface OperationDTO {
    id: string;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class OperationsService {

    private operationsUrl = `https://api.trello.com/1/boards/${environment.board}/lists?key=${environment.apiKey}&token=${environment.apiToken}`;

    constructor(private http: HttpClient) { }

    getOperations(): Observable<Operation[]> {
        return this.http.get<OperationDTO[]>(this.operationsUrl).pipe(
            map(operations => operations.map(operation => {
                return this.convertToOperation(operation);
            }))
        );
    }

    private convertToOperation(operation: OperationDTO): Operation {
        return {
            id: operation.id,
            name: operation.name
        };
    }
}
