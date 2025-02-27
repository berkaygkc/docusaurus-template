import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kolay Kullanım',
    Svg: require('@site/static/img/easy-usage.svg').default,
    description: (
      <>
        Sadece bir kaç tık ile tüm firmalarınız defterlerini yetkili e-imza/mali mührü ile oluşturup gönderin.
      </>
    ),
  },
  {
    title: 'Hızlı İşlemler',
    Svg: require('@site/static/img/fast-usage.svg').default,
    description: (
      <>
        Tüm işlemler hızlı ve güvenli bir şekilde gerçekleşir. İşlemlerinizin durumunu anlık olarak takip edebilirsiniz.
      </>
    ),
  },
  {
    title: 'Kolay Silme',
    Svg: require('@site/static/img/easy-delete.svg').default,
    description: (
      <>
        Defterlerinizi tek tık ile hem muhasebe programından, hem de Gelir İdaresi Başkanlığından silebilirsiniz.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
