import { Access } from "payload/types";

export const isAdmin: Access = ({ req: { user } }) => {
	return Boolean(user?.roles?.includes("admin"));
};
