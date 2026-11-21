import './panel-theme.css';
import PanelShell from '@/components/panel/PanelShell';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function PanelLayout({ children }) {
  return <PanelShell>{children}</PanelShell>;
}
