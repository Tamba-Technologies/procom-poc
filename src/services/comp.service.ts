import { BehaviorSubject, map, tap, finalize, Observable } from 'rxjs'
import Axios from 'axios-observable';

class JobService {

    private jobsListSubject = new BehaviorSubject<any[]>([])

    jobsList$: Observable<any[]> = this.jobsListSubject.asObservable()

    private get jobsList(): any[] { return this.jobsListSubject.value }

    private set jobsList(v: any[]) { this.jobsListSubject.next(v) }


    getJobList(): Observable<any[]> {
        return Axios
            .get<any[]>(`https://jsonplaceholder.typicode.com/users`)
            .pipe(
                map(({ data }) => data),
                tap((data) => { this.jobsList = data }),
                finalize(() => { })
            )
    }
}

export const jobService = new JobService()