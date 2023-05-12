import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationListComponent } from './operation-list/operation-list.component';
import { SortPipe } from './sort.pipe';
import { ToolDetailComponent } from '../tools/tool-detail/tool-detail.component'

@NgModule({
  declarations: [
    OperationListComponent,
    SortPipe,
    ToolDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OperationListComponent]
})
export class OperationsModule { }
