import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'From Noob to Raid Boss',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Start your journey from the basics! Our beginner-friendly tutorials will guide you
        through setting up your first emulated server, even if you've never touched code before.
        Level up your skills one step at a time! 🎮
      </>
    ),
  },
  {
    title: 'Deep Dive into the Archives',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master powerful tools like <code>cascette-rs</code> and <code>warcraft-rs</code>.
        Unlock the secrets of WoW's file formats and data structures. 📚
      </>
    ),
  },
  {
    title: 'Join the Guild',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Got stuck on a boss (err... bug)? Join the <a href="https://discord.gg/9hRGqNjxAC">Discord community</a>! Connect with fellow 
        adventurers, get help with your quest, and share your achievements in the world of 
        WoW emulation. 🎭
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
