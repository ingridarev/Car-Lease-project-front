import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  APPLICATIONS_PATH,
  BASE_URL,
  CAR_PATH,
  UPDATE_PATH,
} from '../constants';
import { ROUTES } from '../enums';
import {
  Car,
  LeaseApplication,
  LeaseApplicationForm,
  LeaseApplications,
  LoginResponse,
} from '../types';
import { LocalStorageManagerService } from './local-storage-manager.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationListService {
  private readonly httpClient = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly localStorageService = inject(LocalStorageManagerService);
  private applicationsSubject = new BehaviorSubject<LeaseApplication[]>([]);
  cars$ = new BehaviorSubject<Car[]>([]);
  applications$ = this.applicationsSubject.asObservable();
  application$ = new BehaviorSubject<LeaseApplication | null>(null);
  readonly userHeaders = new HttpHeaders({
    userId: this.getCurrentUser().userId,
    role: this.getCurrentUser().role,
  });
  getApplications(): void {
    this.httpClient
      .get<LeaseApplications>(`${BASE_URL}${APPLICATIONS_PATH}`, {
        headers: this.userHeaders,
      })
      .pipe(tap((applications) => this.applicationsSubject.next(applications)))
      .subscribe();
  }
  getApplicationById(id: number): Observable<LeaseApplication> {
    return this.httpClient
      .get<LeaseApplication>(`${BASE_URL}${APPLICATIONS_PATH}/${id}`)
      .pipe(
        tap((application) => {
          this.application$.next(application);
        }),
      );
  }
  getCars(): void {
    this.httpClient
      .get<Car[]>(`${BASE_URL}${CAR_PATH}`)
      .pipe(tap((cars) => this.cars$.next(cars)))
      .subscribe();
  }
  createApplication(application: LeaseApplicationForm): Observable<unknown> {
    return this.httpClient
      .post(`${BASE_URL}${APPLICATIONS_PATH}`, application)
      .pipe(
        tap((response) => {
          response;
          this.router.navigate([ROUTES.APPLICATIONS]);
        }),
      );
  }
  deleteApplication(id: number | undefined): Observable<unknown> {
    return this.httpClient
      .delete(`${BASE_URL}${APPLICATIONS_PATH}/${id}`, {
        headers: this.userHeaders,
      })
      .pipe(
        tap((response) => {
          response;
          this.router.navigate([ROUTES.APPLICATIONS]);
        }),
      );
  }
  patchApplication(
    applicationId: number,
    application: LeaseApplicationForm,
  ): Observable<unknown> {
    return this.httpClient
      .patch(
        `${BASE_URL}${APPLICATIONS_PATH}${UPDATE_PATH}${applicationId}`,
        application,
        {
          headers: this.userHeaders,
        },
      )
      .pipe(
        tap((response) => {
          response;
          this.router.navigate([ROUTES.APPLICATIONS]);
        }),
      );
  }
  getCurrentUser(): LoginResponse {
    return this.localStorageService.getStoredUser()!;
  }
}
