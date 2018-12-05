export class Api {
	constructor () {
		this.host = 'http://localhost:8000'
		this.apiEndPoint = 'api'
		this.headers = {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}

	get = (url, params) => {
		return fetch(`${this.host}/${this.apiEndPoint}/${url}`, {
    	method: 'GET',
    	headers: this.headers
    })
	}

	post = (url, params = {}) => {
		return fetch(`${this.host}/${this.apiEndPoint}/${url}/`, {
    	method: 'POST',
    	headers: this.headers,
    	body: JSON.stringify(params)
    })
	}
}

export default new Api()