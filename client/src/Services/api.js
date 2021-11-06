
const host = 'http://localhost:5000';

async function request(url, options) {
    try {

        const respons = await fetch(url, options);

        if (respons.ok === false) {
            const error = await respons.json();
            
            throw new Error(error.message);
        }

        try {
            const data = await respons.json();
            return data;
        } catch (err) {
            return respons;
        }

    } catch (err) {
        // alert(err);
        
        throw err;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    };

    if (body) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(body);
    };

    return options;
}

export async function get(url) {
    return await request(host + url, getOptions());
};

export async function put(url, data) {
    return await request(host + url, getOptions('put', data));
};

export async function post(url, data) {
    return await request(host + url, getOptions('post', data));
};

export async function del(url) {
    return await request(host + url, getOptions('delete'));
};

export async function login(data) {
    const result = await post('/user/login', data);
    
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userName', result.userName);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function register(data) {
    const result = await post('/user/register', data);
    
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userName', result.userName);
    sessionStorage.setItem('userId', result._id);

    return result;
}
