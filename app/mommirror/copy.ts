export type Locale = 'en' | 'fr';

export const copy = {
  en: {
    label: 'An invitation from MomMirror',
    heading: ['There’s a little note', 'waiting for you.'],
    loading: 'Preparing your note…',
    discover: 'Discover MomMirror',
    replay: 'Watch the note again',
    title: ['Take a moment', 'for you.'],
    reassurance: 'Find your strength, one calm day at a time. You don’t have to carry it alone.',
    footer: 'Made with care, for all of us.',
    apple: 'Download MomMirror on the App Store',
    google: 'Get MomMirror on Google Play',
    front: ['We made this app for you.', 'Support our cause and help us', 'reach more women.', 'Together, we can make', 'mental health support affordable,', 'inclusive, and free from judgment.', 'For all women. For all of us.'],
    back: ['Find your strength,', 'one calm day at a time.', 'You don’t have to carry it alone.'],
  },
  fr: {
    label: 'Une invitation de MomMirror',
    heading: ['Un petit mot', 'vous attend.'],
    loading: 'Préparation de votre petit mot…',
    discover: 'Découvrir MomMirror',
    replay: 'Revoir le petit mot',
    title: ['Prenez un moment', 'pour vous.'],
    reassurance: 'Retrouvez votre force, un jour paisible à la fois. Vous n’avez pas à tout porter seule.',
    footer: 'Créé avec soin, pour nous toutes.',
    apple: 'Télécharger MomMirror dans l’App Store',
    google: 'Télécharger MomMirror sur Google Play',
    front: ['Nous avons créé cette application pour vous.', 'Soutenez notre cause pour aider plus de femmes.', 'Ensemble, rendons le soutien en santé mentale', 'abordable, inclusif et sans jugement.', 'Pour toutes les femmes. Pour nous toutes.'],
    back: ['Retrouvez votre force,', 'un jour paisible à la fois.', 'Vous n’avez pas à tout porter seule.'],
  },
} as const;
