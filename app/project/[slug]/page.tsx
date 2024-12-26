import DetailsPage, { DetailsPageSchema, DetailsPageService } from '@/pages/DetailsPage';
import { fetcher } from '@/shared/api';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
    params: { slug: string };
};

export async function generateStaticParams() {
    const projectsIds = await fetcher<number[]>('/project/ids')

    return projectsIds.map((id) => ({ slug: String(id) })); 
}

export async function generateMetadata(context: Props): Promise<Metadata> {
    const { params } = context;
    const { slug } = params;

    try {
        const { name, description } = await DetailsPageService.getProjectById(slug);

        return { title: name, description };
    } catch (error) {
        return {}
    }
}

export default async function Details(props: DetailsPageSchema & Props) {
    const { params } = props;
    const { slug } = params; 

    try {
        const data = await DetailsPageService.getProjectById(slug);

        return <DetailsPage {...data} />;
    } catch (error) {
        /** Возвращаем на главную если такой проект не найден */
        redirect('/');
    }
}
