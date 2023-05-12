import { Component, OnInit } from '@angular/core';
import { Operation } from '../operation';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.sass']
})
export class OperationListComponent implements OnInit {

  selectedOperation: Operation | undefined;
  operations: Operation[] = [];

  constructor(private operationsService: OperationsService) {}

  ngOnInit(): void {
    this.getOperations();
  }

  onSelectChange(event: Event) {
    const operationName = (event.target as HTMLSelectElement).value;
    this.selectedOperation = this.operations.find(operation => operation.name === operationName);
  }

  private getOperations() {
    this.operationsService.getOperations().subscribe(operations => {
      this.operations = operations;
    });
  }
}
