import { StringUtil } from '../../utilities/string-util';


export function index(req, res) {

}

/**
 * Validates the index request method
 * @param {HTTP Request Body} body 
 */
function validateIndex(body) {
    let errors = '';

    if (StringUtil.isEmpty(body.username)) {
        errors += 'Username is required. ';
    }

    if (StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}