import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private examples =  new Array();
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getList().subscribe(data => {
      this.examples = data;
    });
  }

}
