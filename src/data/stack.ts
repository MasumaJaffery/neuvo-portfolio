export type AccentColor = 'pink' | 'cyan' | 'green' | 'yellow';

export interface StackGroup {
  label: string;
  color: AccentColor;
  tags: string[];
}

export const stackGroups: StackGroup[] = [
  { label: 'Frontend', color: 'pink', tags: ['React', 'TypeScript', 'JavaScript', 'Tailwind'] },
  { label: 'Backend & Mobile', color: 'cyan', tags: ['Node.js', 'Python', 'React Native', 'Kotlin'] },
  { label: 'CMS & Commerce', color: 'green', tags: ['WordPress', 'WooCommerce', 'Shopify'] },
  { label: 'Tools & Workflow', color: 'yellow', tags: ['Git', 'Figma', 'REST API', 'UI / UX', 'Workflows', 'AI'] }
];
