import { Component, Input, OnChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Operation } from '../../operations/operation';
import { Tool } from '../tool';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.sass']
})
export class ToolDetailComponent implements OnChanges {

  @Input() operation: Operation | undefined;
  @Input() id = "";
  @Input() name = "";
  operation$: Observable<Operation> | undefined;
  tools$: Observable<Tool[]> | undefined;

  constructor(private toolsService: ToolsService) {  }

  ngOnChanges(): void {
    this.operation$ = of({ id: this.id, name: this.name });
    this.tools$ = this.toolsService.getTools(this.id);
   }
}
