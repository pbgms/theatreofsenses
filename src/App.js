import React, { Component } from 'react';
import classNames from 'classnames';
import { Router, Route, Switch, Link, Head } from 'react-static';


import WorkList from 'containers/WorkList';
import About from 'containers/About';
import Events from 'containers/Events';
// import 404 from 'containers/404';


import './app.css';


const data = {
  title: {
      en: 'Theatre of senses',
      lt: 'Pojūčių teatras'
  },
  items: [
    {
      slug: 'events',
      name: { en: 'Events', lt: 'Renginiai' },
    },
    {
      slug: 'works',
      name: { en: 'Works', lt: 'Darbai' },
    },
    {
      slug: 'about',
      name: { en: 'About', lt: 'Apie' },
    },
    // {
    //     slug: 'contact',
    //     name: { en: 'Contacts', lt: 'Kontaktai'}
    // }
  ],
};


class App extends Component {
  constructor() {
    super();



    this.state = {
        lang: typeof window !== 'undefined' && window.location ? (window.location.hostname === 'pojuciuteatras' ? 'lt' : 'en') : 'en',
        current: typeof window !== 'undefined' && window.location ? (window.location.pathname) : '',
    };

    this.toggleLang = this.toggleLang.bind(this);
  }

  componentDidMount() {
      this.setState({
          lang: window.location.hostname === 'pojuciuteatras' ? 'lt' : 'en',
          current: window.location.pathname,
      })
  }

  toggleLang() {
      this.setState({ lang: this.state.lang === 'lt' ? 'en' : 'lt' });
  }

  generateLanguageBlock() {
      const {lang} = this.state

      let langBlock;

      if (lang === 'en') {
          langBlock = (
              <div className="language-block">
                  <span className="lang-block-text">en <span className="lang-block-click" onClick={this.toggleLang}>lt</span></span>
              </div>
          );
      } else {
          langBlock = (
              <div className="language-block">
                  <span className="lang-block-text"><span className="lang-block-click" onClick={this.toggleLang}>en</span> lt</span>
              </div>
          );
      }
      return langBlock
  }

  render() {

    const pathname = this.state.current;

    const lang = this.state.lang;

    return (
      <Router>
        <div className="App">

          <Head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta property="og:url" content="http://www.theatreofsenses.com/" />
              <meta property="og:title" content="Theatre of senses" />
              <meta property="og:description" content="Theatre of senses creates participatory performances" />
              <meta property="og:image" content="http://www.theatreofsenses.com/images/logo.png" />
              <meta property="og:image" content="http://www.theatreofsenses.com/images/bendra.jpg" />
              <meta property="og:image" content="http://www.theatreofsenses.com/images/bendra1.jpg" />
              <meta property="og:image" content="http://www.theatreofsenses.com/images/works/beforethelight/12967441_1195397820500203_7812589370848680694_o.jpg" />
              <meta property="og:image" content="http://www.theatreofsenses.com/images/works/picturesofsenses/DSC_2878.JPG" />
              <meta property="og:image" content="http://www.theatreofsenses.com/images/works/primordial/15400421_1356627651014436_8408958191387817476_n.jpg" />
              <meta property="og:image" content="http://www.theatreofsenses.com/images/works/stonewatersting/vyt_3199.jpg" />
              <meta property="og:image" content="http://www.theatreofsenses.com/images/works/tenseinsense/DSC_0151.JPG" />
              <link rel="stylesheet" href="/css/font-awesome.min.css" />
              <link rel="shortcut icon" href="/favicon.ico" />
          </Head>

          <div className="App-left">
            <div className="App-logo-block">
              <Link to="/"><img src="/images/logo.png" className="App-logo" alt="logo" /></Link>
            </div>
            <div className="left-lower-block">
              <div className="App-title"><Link to="/">{data.title[lang]}</Link></div>
              <div className="App-menu">
                <div className="menu-item-normal">

                    {data.items.map((item, index) => {

                        const activeSlug = pathname.indexOf(`/${item.slug}`) > -1;
                        const itemClasses = classNames('App-menu-item', { Appmenuitemactive: activeSlug });
                        const urlSlug = `/${lang}/${item.slug}`;

                        return (
                          <div key={item.slug} className={itemClasses} onClick={()=>this.setState({current: urlSlug})}>
                            <Link to={urlSlug}>
                              {item.name[lang]}
                            </Link>
                          </div>
                        );
                })}

                </div>
                <div className="App-menu-item App-menu-item-fb">
                  <a href="http://www.facebook.com/pojuciuteatras" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook-square" aria-hidden="true" />acebook
                  </a>
                </div>

                { this.generateLanguageBlock() }

              </div>
            </div>
          </div>

          <div className="App-right-wrapper">

            <div className="App-right">

                <Switch>
                    <Route path="/" exact render={() => null} />
                    <Route path={`/:lang/about`} render={() => <About lang={lang} />} />
                    <Route path={`/:lang/events`} render={() => <Events lang={lang} />} />
                    <Route path={`/:lang/works`} component={WorkList} />
                </Switch>

            </div>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
