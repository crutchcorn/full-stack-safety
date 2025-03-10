import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export function renderContainer(children: PropsWithChildren['children']) {
    return render(<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>)
}