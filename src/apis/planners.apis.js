import axios from "../libs/axios.lib";
import * as loginUtils from "../utils/login.utils";

export async function getPlannersAPI() {
	const token = loginUtils.getUser().token;

	const { data } = await axios.get("planners/planners", {
		headers: {
			Authorization: token,
		},
	});

	return data;
}

export async function addPlannerAPI(
	body = {
		first_name: "",
		last_name: "",
		emp_id: "",
		email: "",
		password: "",
		role_id: 0,
	}
) {
	const token = loginUtils.getUser().token;

	const { data } = await axios.post(
		"planners/planner",
		{
			...body,
		},
		{
			headers: {
				Authorization: token,
			},
		}
	);

	return data;
}

export async function editControllerAPI(
	user_id,
	body = {
		first_name: "",
		last_name: "",
		emp_id: "",
		email: "",
		password: "",
		role_id: 0,
	}
) {
	const token = loginUtils.getUser().token;

	const { data } = await axios.put(
		"controllers/controllers/" + encodeURIComponent(user_id),
		{
			...body,
		},
		{
			headers: {
				Authorization: token,
			},
		}
	);

	return data;
}
