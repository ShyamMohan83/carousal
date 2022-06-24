import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousal';
  data = [{
    title: 'Due date today1',
    task: 'Sample task',
    project: 'This is a test Project'
  },
{
  title: 'Due date today2',
  task: 'Sample task',
  project: 'This is a test Project'
},
{
  title: 'Due date today3',
  task: 'Sample task',
  project: 'This is a test Project'
},
{
  title: 'Due date today4',
  task: 'Sample task',
  project: 'This is a test Project'
},

{
  title: 'Due date today5',
  task: 'Sample task',
  project: 'This is a test Project'
},
{
  title: 'Due date today6',
  task: 'Sample task',
  project: 'This is a test Project'
}

];

attributes = {
  title: '',
  task :'Task',
  project: 'Project'

}

}
