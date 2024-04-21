'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: { refetchOnWindowFocus: false },
			},
		})
	);

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
