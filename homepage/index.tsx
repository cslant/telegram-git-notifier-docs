import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import './styles.scss';
import SvgBackground from '@site/repo/telegram-git-notifier-docs/images/telegram-git-notifier-background.svg'

const HeaderData = {
  title: 'Documentation For Telegram Git Notifier',
  Svg: SvgBackground,
  description: 'With this package, you can create a Telegram bot to receive notifications from GitHub or GitLab events.',
  startButtonLink: '/telegram-git-notifier/introduction',
  startButtonLabel: 'Get Started'
};

function HomepageHeader() {
  const {Svg, title, description, startButtonLink, startButtonLabel} = HeaderData;

  return (
    <header className="main_header">
      <div className="container">
        <div className="row">
          <div className='col col--5 left_header'>
            <Heading as="h1" className='hero__title main_title'>
              {title}
            </Heading>
            <p className="hero__subtitle">{description}</p>
            <div className='buttons'>
              <Link className="button button--info button--lg" to={startButtonLink}>
                {startButtonLabel}
              </Link>
            </div>
          </div>
          <div className={clsx('col col--7')}>
            <Svg/>
          </div>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description}) {
  return (
    <div className='col col--4 feature'>
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function TelegramGitNotifierHome(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home Page" description="Telegram Git Notifier Documentation">
      <HomepageHeader/>
      <main>
        <section className='features'>
          <div className="container">
            <div className="row">
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
