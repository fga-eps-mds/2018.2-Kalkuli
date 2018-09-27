/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap footerStyle">
          <a href={this.props.config.baseUrl} className="nav-home">
              <img
                src='img/kalkui.png'
                alt={this.props.config.title}
                width="70"
                height="60"
              />
          </a>
          <div>
            <h5>Sobre</h5>
            <a href="#">Universidade de Brasília</a>
            <a
              href="https://github.com/fga-eps-mds/2018.2-Kalkuli"
              target="_blank"
              rel="noreferrer noopener">
              Grupo 1
            </a>
          </div>
          <div>
            <h5>Como Contribuir</h5>

            <a href="https://fga-eps-mds.github.io/2018.2-Kalkuli/docs/contributing">GitHub</a>
            <a
              className="github-button"
              href='github.com/fga-eps-mds/2018.2-Kalkuli'
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
