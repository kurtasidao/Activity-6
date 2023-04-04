import { Component, Output } from '@angular/core';
import { Employee } from '../app/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees = [
    new Employee(1,'11-11','Kurt Stephen', 'Asidao', new Date(2001,6,21),'M', 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/297636008_5618976901488181_9179945950269761272_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XG2NwpSPSLoAX8da7Ls&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfDoC1KYaDami_7lRgdUB0v0ETHR9xSriAtg8Vf2Ee4E1Q&oe=643009AC', true),
    new Employee(2, '11-02','Kent', 'Asidao', new Date(2001,6,21), 'M', 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/334712710_1370868676997514_5220324691980794138_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=T7tzJit3IKsAX-R2Km-&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfAAq8FN6szRNu8o1ur2CDa9MxILq84qAmFaUlrADhgYpw&oe=643029AD', true),
    new Employee(3, '12-10',"Charmie Lyn", "Asidao", new Date(2002, 10, 22), 'F', "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-1/321964130_563152772356972_9131789236758885938_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=f67be1&_nc_ohc=hCMwhRmhz5IAX9CBWaQ&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfD9UJHqhDvM0d8SQfRTr2n_nixYGMrcpQ5cbPZQO3mhhw&oe=643156F6", true),
    new Employee(4, '13-11',"Cazzie", "Asidao", new Date(2002, 10, 22), 'F', "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/118580755_101798524997911_2549150511706729544_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o5TaqJt6aEYAX8U629_&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfDk9tQSkPsipVr16_zbW8BSqexHmF8BtTGguGFKpZp5sg&oe=645334B9", true),
    new Employee(5, '14-10',"Jasper", "Asidao", new Date(2002, 10, 22), 'M', "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/335078108_949331776236220_4725181219023297434_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=wtUrV2BZgQUAX82hKrq&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA0lw2CTxQG9frjULMPZyIpAlS5yLeZ7lcBnic-OYfgQw&oe=64312584", false)
  ];
  title = 'angular8-springboot-client';
  toggleList= 0;
  setToggle(toggle: number) {
    this.toggleList = toggle;
  }
  onEmployeeCreated(employee: {id?: number,number?: string,firstName?: string, lastName?: string, birthday?: Date, Gender?: string, Picture?: string, Active?: boolean}) {
    var newemployee = new Employee(employee.id, employee.number, employee.firstName, employee.lastName, employee.birthday, employee.Gender, employee.Picture, employee.Active);
    this.employees.push(newemployee);
    this.setToggle(0);
  }
}