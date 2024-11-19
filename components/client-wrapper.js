"use client";

import { Suspense } from "react";

export default function ClientWrapper({ children, fallback = null }) {
	if (!children) return null;

	return <Suspense fallback={fallback}>{children}</Suspense>;
}
