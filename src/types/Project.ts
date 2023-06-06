export interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: {
    github?: string;
    app?: string;
  };
}
