export type { ProjectDetails } from './model/types/projectDetails';
export { ProjectCard } from './ui/ProjectCard/ProjectCard';
export { ProjectCardSkeleton } from './ui/ProjectCard/ProjectCard.skeleton';
export type {Project} from './model/types/project';
export { detailsReducer } from './model/slice/detailsSlice';
export { detailsActions } from './model/slice/detailsSlice';
export type { DetailsSchema } from './model/types/detailsShema';
export { getEditableProject } from './model/selectors/getEditableProject';