import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";


async function enableMocking() {
  // You can add a check here for `dev` mode to conditionally enable this
  
  const { worker } = await import('./utils/testing-utils/server')
  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );  
})
