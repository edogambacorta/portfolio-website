import type { Metadata } from 'next';
import Invitation from './Invitation';
import './mommirror.css';

export const metadata: Metadata = {
  title: 'A little note for you | MomMirror',
  description: 'A little invitation to take a moment for yourself with MomMirror.',
  openGraph: { title: 'A little note for you | MomMirror', description: 'Find your strength, one calm day at a time.' },
};

export default function MomMirrorPage() { return <Invitation />; }
