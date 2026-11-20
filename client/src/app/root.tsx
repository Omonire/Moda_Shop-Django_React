import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { Button } from "@/components/ui";
import { StatusPage } from "@/components/common/StatusPage";
import LoadingPage from "@/components/common/LoadingPage";

export const AppRoot = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense key={location.pathname} fallback={<LoadingPage message="Cargando página..." />}>
        <Outlet />
      </Suspense>
    </AnimatePresence>
  );
};

export const AppRootErrorBoundary = ({ reset }: { reset?: () => void }) => {
  return (
    <StatusPage
      code="500"
      tone="error"
      title="Algo salió mal"
      description="No pudimos cargar esta sección. Inténtalo de nuevo más tarde."
      action={
        reset ? (
          <Button variant="primary" onClick={reset}>
            Reintentar
          </Button>
        ) : null
      }
    />
  );
};
