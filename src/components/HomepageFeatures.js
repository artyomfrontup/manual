import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Развертывание проекта с GitHub.',
    Svg: require('../../static/img/gitLogo.svg').default,
    description: (
      <>Прикрепи репозиторий и получи развернутый frontend через 5 минут.
      </>
    ),
  },
  {
    title: 'Защита трафика через HTTPS.',
    Svg: require('../../static/img/secureLogo.svg').default,
    description: (
      <>SSL/TLS сертификаты для ваших сайтов с доступом по HTTPS, подписанные открытым центром сертификации Let’s Encrypt.
      </>
    ),
  },
  {
    title: 'Сервера в России.',
    Svg: require('../../static/img/server.svg').default,
    description: (
      <>Быстрая загрузка и высокая безопасность.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
