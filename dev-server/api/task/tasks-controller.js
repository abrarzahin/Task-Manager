import User from '../../model/user-model';
import Task from '../../model/task-model';
import moment from 'moment';
import * as auth from '../../services/auth-service';

export function index(req, res) {
        return res.status(200).json();
}

export function create(req, res) {
   
            return res.status(201).json();
}

export function update(req, res) {
    return res.status(204).json();
}

export function remove(req, res) {
            return res.status(204).json();
}

export function show(req, res) {
 
        return res.status(200).json();
}