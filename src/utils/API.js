import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?results=75';

// Export an object with a 'populateEmployees' method that searches the randomuser API for the passed query
export default {
	populateEmployees: function () {
		return axios.get(BASEURL);
	},
};