import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLogedInGuard: CanActivateFn = (route, state) => {
  let _Router=inject(Router);
if(localStorage.getItem("token") !== null) {
  _Router.navigate(['/home'])
  return false;
}else{
  return true;
}
};
