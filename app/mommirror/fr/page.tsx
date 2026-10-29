import type { Metadata } from 'next';
import Invitation from '../Invitation';
import '../mommirror.css';

export const metadata: Metadata = {
  title: 'Un petit mot pour vous | MomMirror',
  description: 'Une invitation à prendre un moment pour vous avec MomMirror.',
  openGraph: { title: 'Un petit mot pour vous | MomMirror', description: 'Retrouvez votre force, un jour paisible à la fois.' },
};

export default function FrenchMomMirrorPage() { return <Invitation locale="fr" />; }
