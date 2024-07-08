import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileData = new BehaviorSubject<any>({});
  profileData$ = this.profileData.asObservable();
  constructor() { }
  updateProfile(newProfile: any) {
    this.profileData.next(newProfile);
  }
}
