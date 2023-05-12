import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tool } from './tool';
import { environment } from '../../environments/environment';

interface ToolDTO {
    id: string;
    idList: string;
    name: string;
    desc: string;
}

@Injectable({
    providedIn: 'root'
})
export class ToolsService {

    private toolsUrl = `https://api.trello.com/1/boards/${environment.board}/cards?key=${environment.apiKey}&token=${environment.apiToken}`;

    constructor(private http: HttpClient) { }

    getTools(listId: String): Observable<Tool[]> {
        return this.http.get<ToolDTO[]>(this.toolsUrl).pipe(
            map(tools => tools.filter(tool => tool.idList === listId)),
            map(tools => tools.map(tool => {
                return this.convertToTool(tool);
            }))
        );
    }

    private convertToTool(tool: ToolDTO): Tool {
        return {
            id: tool.id,
            idList: tool.idList,
            name: tool.name,
            url: tool.desc
        };
    }
}
