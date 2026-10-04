export interface ShellRenderOptions {
  currentPath?: string;
  year?: number;
}

export interface ShellAnchor {
  key: string;
  label: string;
  href: string;
}

export interface ShellManifest {
  brand: { label: string; href: string; logoSrc: string };
  header: {
    primary: Array<{ label: string; href: string }>;
    products: Array<{ label: string; href: string }>;
    resources: {
      all: { label: string; href: string };
      groups: Array<{ heading: string; links: Array<{ label: string; href: string }> }>;
    };
    cta: { label: string; href: string };
  };
  footer: unknown;
}

export const shellManifest: ShellManifest;
export const expectedShellAnchors: ShellAnchor[];
export function renderHeader(options?: ShellRenderOptions): string;
export function renderFooter(options?: ShellRenderOptions): string;
