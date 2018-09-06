import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../models/User';

@Injectable()
export class UserService {
    public usersUrl: string;

    constructor(private http: HttpClient) {
        this.usersUrl = '/people'
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.usersUrl, user);
    }
}