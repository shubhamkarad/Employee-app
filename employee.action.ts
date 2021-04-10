import{createAction, props} from '@ngrx/store';
import{employee1} from 'src/app/Employee';
export const addEmployee = createAction('Add Employee' , props<{employee: employee1}>());
export const updateEmployee = createAction('update Employee');
export const removeEmployee = createAction('remove Employee');