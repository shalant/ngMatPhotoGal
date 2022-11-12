import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

// plan: eventually make a table (sortable, searchable, paginated) with all technologies, display icons

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Angular',
  'React',
  'Azure Developer Associate',
  'AWS Developer Associate',
  'AWS Certified Cloud Practicioner',
  'AWS Solutions Architect Associate',
  'ASP.NET',
  'C#',
  'Material-UI',
  'Github',
  'Bootstrap',
  'MS SQL Server',
  'MYSQL',
  'MongoDB',
  'Node',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
const TECHNOLOGIES: any[] = [
  {item: 'Angular', type: 'Framework', icon: '<i class="fa-brands fa-angular"></i>'},
  {item: 'React', type: 'Framework'},
  {item: 'Azure-204 Developer Associate', type: 'Cloud Certification'},
  {item: 'AWS Developer Associate', type: 'Cloud Certification'},
  {item: 'AWS Certified Cloud Practicioner', type: 'Cloud Certification'},
  {item: 'AWS Solutions Architect Associate', type: 'Cloud Certification'},
  {item: 'Azure-900', type: 'Cloud Certification'},
  {item: 'ASP.NET', type: 'Certification'},
  {item: 'Material-UI', type: 'CSS'},
  {item: 'MYSQL', type: 'Database'},
  {item: 'MS SQL Server', type: 'Database'},
  {item: 'MongoDB', type: 'Database'},
  {item: 'Azure-900', type: 'Certification'},
  {item: 'Azure-900', type: 'Certification'},
  {item: 'Azure-900', type: 'Certification'},
  {item: 'Azure-900', type: 'Certification'},
  
  'ASP.NET',
  'C#',
  '',
  'Github',
  'Bootstrap',
  '',
  '',
  '',
  'Node',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'about',
  styleUrls: ['about.component.css'],
  templateUrl: 'about.component.html',
})
export class AboutComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
