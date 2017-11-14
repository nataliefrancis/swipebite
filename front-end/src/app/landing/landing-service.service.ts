import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { isDevMode } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LandingService {

	baseUrl : string;
	//private user: Observable<firebase.User>;
  //private userDetails: firebase.User = null;

	constructor( 
		//private _firebaseAuth: AngularFireAuth, 
		private http : Http
	) { 

			// this.user = _firebaseAuth.authState;

	  //   this.user.subscribe(
	  //     (user) => {
	  //       if (user) {
	  //         this.userDetails = user;
	  //         console.log(this.userDetails);
	  //       }
	  //       else {
   //          this.userDetails = null;
   //        }
	  //     }
	  //   );

	    // sets the base url
			if(isDevMode()) {
				this.baseUrl = 'http://localhost:3000';
			} else {
				this.baseUrl = '';
			}

	}

	// createUser(newUser){
 //  	return this.http.post(`${this.baseUrl}/users/`,newUser);
 //  }

	callGooglePlacesAPI (body) {
		console.log('at the landing service');
		console.log(body);
		console.log(typeof(body));
		return this.http.post(`${this.baseUrl}/api/places`, body); //, {headers: headers});
	}

	// signInFirebaseGoogle() {
	// 	console.log('hitting firebase function on landing service');
	// 	return this._firebaseAuth.auth.signInWithPopup(
 //      new firebase.auth.GoogleAuthProvider()
 //    )
	// 	// return this.http.get(`${this.baseUrl}/firebase/google`);
	// }
}

///////////////////// GRAVEYARD ////////////////////////////////

/*
DOG CHECK IN
import { Injectable } from '@angular/core';
    import { Router } from '@angular/router';

    import { AngularFireAuth } from 'angularfire2/auth';
    import * as firebase from 'firebase/app';
    import { Observable } from 'rxjs/Observable';

    @Injectable()
    export class AuthService {
      private user: Observable<firebase.User>;
      private userDetails: firebase.User = null;

      constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
        this.user = _firebaseAuth.authState;

        this.user.subscribe(
          (user) => {
            if (user) {
              this.userDetails = user;
              console.log(this.userDetails);
            }
            else {
                this.userDetails = null;
                 }
            }
            );
        }

    signInWithGoogle() {
      return this._firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
        )
    }

      isLoggedIn() {
      if (this.userDetails == null ) {
          return false;
        } else {
          return true;
        }
      }


      logout() {
        this._firebaseAuth.auth.signOut()
        .then((res) => this.router.navigate(['/login']));
      }
    }
  }

*/

// saveUser (newUser) {
// 	return this.http.post(`${this.baseUrl}/auth/google`, newUser);
// }



