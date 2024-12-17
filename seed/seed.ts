import { getPayloadClient } from "../lib/payload";
import { seedData } from "./initial-data";

const seed = async () => {
	const payload = await getPayloadClient();

	try {
		await seedData(payload);
	} catch (error) {
		console.error("Error seeding data:", error);
		process.exit(1);
	}

	process.exit();
};

seed();
