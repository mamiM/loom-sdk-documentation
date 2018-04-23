/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html', language)}>Example Link</Button>
            <Button href={docUrl('doc2.html', language)}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <div className="features-container">
    <Block layout="fourColumn">
      {[
        {
          content: 'This is the content of my feature. This is another description of how this project is useful',
          image: imgUrl('artifact-1.svg'),
          imageAlign: 'top',
          title: 'Feature One',
        },
        {
          content: 'The content of my second feature. This is another description of how this project is useful',
          image: imgUrl('artifact-2.svg'),
          imageAlign: 'top',
          title: 'Feature Two',
        },
        {
          content: 'The content of my third feature. This is another description of how this project is useful',
          image: imgUrl('artifact-3.svg'),
          imageAlign: 'top',
          title: 'Feature Three',
        },
      ]}
    </Block>
  </div>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);


const Banner = props => (
  <div className="banner tile-bg">
    <div className="wrapper">
      <div className="banner-copy">
        <h1>
          Loom SDK
        </h1>
        <h3>Build decentralized worlds</h3>
        <p>
          This is an intro to building your first DAppChain using Go on the DAppchain and Solidity on Mainnet.
        </p>
      </div>
      <div className="banner-form">
        <div className="form-container">
          <h3 className="mb-3">
            SIGN UP FOR BETA ACCESS <br />
          </h3>
           <input type="email" className="email-input mb-3" name="email" placeholder="Email" />
           <a className="sign-up-btn">Sign up</a>
        </div>
      </div>
    </div>
  </div>
);

const Prereqs = props => (
  <div className="prereqs custom-section">
    <div className="header-content">
      <h3>
        Prerequisites
      </h3>
      <p>
        Golang for directions on how to set it up
      </p>
    </div>
    <pre>
      <code className="dark-code">
        wget go1.1.0.1.darwin-amd64.tar.gz <br />
        tar -C /usr/local -xzf go1.1.0.1.darwin-amd64.tar.gz
      </code>
    </pre>
    <p>
        *Add GOPATH to your bashrc <br />
        Protobufs https://github.com/google/protobuf/releases/tag/v3.5.1
    </p>
    <pre>
      <code className="dark-code">
        wget go1.1.0.1.darwin-amd64.tar.gz <br />
        tar -C /usr/local -xzf go1.1.0.1.darwin-amd64.tar.gz
      </code>
    </pre>
  </div>
);

const Instructions = props => (
  <div className="instructions custom-section">
    <div className="grid-container">
      <div className="wrapper">
        <div className="grid-col grid-col-2">
          <h3>
            Step 1. Setup the dependencies
          </h3>
          <pre>
            <code className="light-code">
              wget go1.1.0.1.darwin-amd64.tar.gz <br />
              tar -C /usr/local -xzf go1.1.0.1.darwin-amd64.tar.gz
            </code>
          </pre>
        </div>
        <div className="grid-col grid-col-2">
          <h3>
            Step 2. Create a project
          </h3>
          <pre>
            <code className="light-code">
              wget go1.1.0.1.darwin-amd64.tar.gz <br />
              tar -C /usr/local -xzf go1.1.0.1.darwin-amd64.tar.gz
            </code>
          </pre>
          <p>
            Loom Platform has generators for a default project
          </p>
        </div>
      </div>
    </div>
    <div className="grid-container">
      <div className="wrapper">
        <div className="grid-col grid-col-2">
          <h3>
            Step 3. Setup a new transaction
          </h3>
          <pre>
            <code className="light-code">
              wget go1.1.0.1.darwin-amd64.tar.gz <br />
              tar -C /usr/local -xzf go1.1.0.1.darwin-amd64.tar.gz
            </code>
          </pre>
        </div>
        <div className="grid-col grid-col-2">
          <h3>
            Step 4. Startup the blockchain
          </h3>
          <pre>
            <code className="light-code">
              wget go1.1.0.1.darwin-amd64.tar.gz <br />
              tar -C /usr/local -xzf go1.1.0.1.darwin-amd64.tar.gz
            </code>
          </pre>
          <p>
            Loom Platform has generators for a default project
          </p>
        </div>
      </div>
    </div>
    <div className="grid-container">
      <div className="wrapper">
        <div className="grid-col grid-col-2">
          <h3>
            Step 5. Generate JS client
          </h3>
          <pre>
            <code className="light-code">
              wget go1.1.0.1.darwin-amd64.tar.gz <br />
              tar -C /usr/local -xzf go1.1.0.1.darwin-amd64.tar.gz
            </code>
          </pre>
        </div>
        <div className="grid-col grid-col-2">
          <h3>
            Step 6. Interact with the Blockchain
          </h3>
          <pre>
            <code className="light-code">
              wget go1.1.0.1.darwin-amd64.tar.gz <br />
              tar -C /usr/local -xzf go1.1.0.1.darwin-amd64.tar.gz
            </code>
          </pre>
          <p>
            Loom Platform has generators for a default project
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Suggestions = props => (
  <div className="suggestions custom-section">
    <h3>
      What should we be building?
    </h3>
  </div>
)

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('zombie-dude.png'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('zombie-dude.png'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('zombie-dude.png'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="landing-page">
        <div className="mainContainer">
          <Banner />
          <Prereqs />
          <Instructions />
          <Suggestions />
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;

// Unused components
// <HomeSplash language={language} />
// <Showcase language={language} />
