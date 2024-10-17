import DetailsPage, { DetailsPageSchema, DetailsPageService } from '@/pages/DetailsPage';
import { Metadata } from 'next';

type Props = {
    params: { slug: string };
};

export async function generateStaticParams() {
    // @todo: endpoint for all project ids
    const projectsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return projectsIds.map((id) => ({ slug: String(id) }));
}

export async function generateMetadata(context: Props): Promise<Metadata> {
    const { params } = context;
    const { slug } = params;

    const { name, description } = await DetailsPageService.getProjectById(slug);

    return { title: name, description };
}

export default async function Details(props: DetailsPageSchema & Props) {
    const { params } = props;
    const { slug } = params;

    const data = await DetailsPageService.getProjectById(slug);

    return <DetailsPage {...data} />;
}
