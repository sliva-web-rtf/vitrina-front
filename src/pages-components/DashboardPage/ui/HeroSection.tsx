import React from 'react';

import { CompactHero } from '@/widgets/CompactHero';

const HERO_TITLE =
    'Проектный практикум — это образовательная форма, которая сочетает теоретическое обучение с практическим применением знаний и навыков в реальных или симулированных проектах';

const HERO_TAGS = ['ИРИТ-РТФ', 'ИНФО', 'Проектное обучение'];

export const HeroSection = () => {
    return (
        <section style={{ marginTop: '0' }}>
            <CompactHero title={HERO_TITLE} tags={HERO_TAGS} />
        </section>
    );
};
