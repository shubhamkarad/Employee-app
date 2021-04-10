import {createReducer, on} from '@ngrx/store'; 
import{addEmployee, updateEmployee, removeEmployee} from './employee.action';
import {employee1} from './src/app/Employee';
export const initialState :employee1[]=[];

const _employeeReducer = createReducer(
    initialState,
    on(addEmployee, (state, {employee})=> [...state, employee])

)

export function employeeReducer(state, action )
{
    return _employeeReducer(state, action);
}