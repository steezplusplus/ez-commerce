import { ModalProvider } from './modal-provider';
import { ThemeProvider } from './theme-provider';
import { ToastProvider } from './toast-provider';

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider />
      <ToastProvider />
      {children}
    </ThemeProvider>
  );
}
