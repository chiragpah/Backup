import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AnnouncementService } from '../../../services/announcement.service';
import { Observable, Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  announcements: any[] = [];
  displayedAnnouncements: any[] = [];
  @Input() annoucementCount$: Subject<number>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementService.getAllAnnouncements().subscribe(
      (data) => {
        console.log(data);

        this.announcements = data;
        this.paginator.length = this.announcements.length;
        this.paginator.pageSize = 6;
        this.onPageChange({ pageIndex: 0, pageSize: this.paginator.pageSize });

      },
      (error) => {
        console.error('Error loading announcements:', error);
      }
    );
  }

  onPageChange(event): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedAnnouncements = this.announcements.slice(startIndex, endIndex);
  }

  deleteAnnouncement(id: string): void {
    this.announcementService.deleteAnnouncement(id).subscribe(
      (response) => {
        console.log('Announcement deleted:', response);
        // Remove the deleted announcement from the displayed announcements
        this.displayedAnnouncements = this.displayedAnnouncements.filter(announcement => announcement._id !== id);
        // Optionally, you may reload the announcements to refresh the paginator
        this.loadAnnouncements();
      },
      (error) => {
        console.error('Error deleting announcement:', error);
      }
    );
  }

}