import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  constructor(
    public spaceService : SpaceService
  ) { }

  ngOnInit(): void {

    this.spaceService.getSpaces().subscribe(result => {
      console.log('result ',result)
    })
  }

}
