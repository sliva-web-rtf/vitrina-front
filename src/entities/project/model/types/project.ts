export interface Project {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly tags: Array<string>;
}
