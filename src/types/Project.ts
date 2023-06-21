export interface Project {
  title: string;
  description: {
    pt: string;
    en: string;
  };
  tags: string[];
  links?: {
    github?: string;
    app?: string;
  };
}
