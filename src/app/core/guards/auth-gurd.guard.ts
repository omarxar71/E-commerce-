import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGurdGuard: CanActivateFn = (route, state) => {
  let _Router=inject(Router);
if(localStorage.getItem("token") !== null) {
  return true;
}else{
  _Router.navigate(['/signin'])

  return false;
}
};
