import { EditProjectDto } from '../../api/types';
import { ProjectEditFormSchema } from '../../model/types/projectCreationForm';
import { projectCreationToDto } from './projectCreationMapper';

export const projectEditToDto = (model: ProjectEditFormSchema): EditProjectDto => {
    return {
       id: model.id,
       ...projectCreationToDto(model)
    }
};
