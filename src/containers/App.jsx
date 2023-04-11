import logo from "../assets/logo.svg";
import CustomScrollbars from "../components/CustomScrollbars";
import { Counter } from "../components/Counter";
import "./App.scss";
import { Col, Container, Row } from "reactstrap";

import "../assets/scss/style.scss";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import SimpleMap from "./Map";
// @@if(darktheme== 'true'){
// <link rel="stylesheet" href="assets/css/layout-dark.css">
// }
// @@if(rtltheme== 'true'){
// import "../assets/scss/layout-rtl.scss";
// }

function App() {
  return (
    <CustomScrollbars style={{ height: "100vh", width: "100%" }}>

      {/* <Container>
        <Row>
          <TodoForm />
        </Row>
        <Row>
          <TodoList />
        </Row>
        
        <Row>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Counter />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <span>
                <span>Learn </span>
                <a
                  className="App-link"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                <span>, </span>
                <a
                  className="App-link"
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux
                </a>
                <span>, </span>
                <a
                  className="App-link"
                  href="https://redux-toolkit.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                  className="App-link"
                  href="https://react-redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Redux
                </a>
              </span>
            </header>
            <div style={{ height: "500px" }}></div>
          </div>
        </Row>
        <Row>
          <Col className="bg-light border">.col</Col>
        </Row>
        <Row>
          <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col>
        </Row>
        <Row>
          <Col className="bg-light border" xs="3">
            .col-3
          </Col>
          <Col className="bg-light border" xs="auto">
            .col-auto - variable width content
          </Col>
          <Col className="bg-light border" xs="3">
            .col-3
          </Col>
        </Row>
        <Row>
          <Col className="bg-light border" xs="6">
            .col-6
          </Col>
          <Col className="bg-light border" xs="6">
            .col-6
          </Col>
        </Row>
        <Row>
          <Col className="bg-light border" sm="4" xs="6">
            .col-6 .col-sm-4
          </Col>
          <Col className="bg-light border" sm="4" xs="6">
            .col-6 .col-sm-4
          </Col>
          <Col className="bg-light border" sm="4">
            .col-sm-4
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            sm={{
              offset: 1,
              order: 2,
              size: 6,
            }}
          >
            .col-sm-6 .order-sm-2 .offset-sm-1
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            md={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            .col-sm-12 .col-md-6 .offset-md-3
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            sm={{
              offset: 1,
              size: "auto",
            }}
          >
            .col-sm-auto .offset-sm-1
          </Col>
          <Col
            className="bg-light border"
            sm={{
              offset: 1,
              size: "auto",
            }}
          >
            .col-sm-auto .offset-sm-1
          </Col>
        </Row>
      </Container>

      <div className="loader-bg">
        <div className="loader-track">
          <div className="loader-fill"></div>
        </div>
      </div>

      {/* <nav className="pcoded-navbar menu-light ">
        <div className="navbar-wrapper  ">
          <div className="navbar-content scroll-div ">
            <div className="">
              <div className="main-menu-header">
                <img
                  className="img-radius"
                  // src="assets/images/user/avatar-2.jpg"
                  alt="User-Profile"
                />
                <div className="user-details">
                  <div id="more-details">
                    UX Designer <i className="fa fa-caret-down"></i>
                  </div>
                </div>
              </div>
              <div className="collapse" id="nav-user-link">
                <ul className="list-unstyled">
                  <li className="list-group-item">
                    <a href="user-profile.html">
                      <i className="feather icon-user m-r-5"></i>View Profile
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#!">
                      <i className="feather icon-settings m-r-5"></i>Settings
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="auth-normal-sign-in.html">
                      <i className="feather icon-log-out m-r-5"></i>Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="nav pcoded-inner-navbar ">
              <li className="nav-item pcoded-menu-caption">
                <label>Navigation</label>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-home"></i>
                  </span>
                  <span className="pcoded-mtext">Dashboard</span>
                </a>
              </li>
              <li className="nav-item pcoded-hasmenu">
                <a href="#!" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-layout"></i>
                  </span>
                  <span className="pcoded-mtext">Page layouts</span>
                </a>
                <ul className="pcoded-submenu">
                  <li>
                    <a href="layout-vertical.html" target="_blank">
                      Vertical
                    </a>
                  </li>
                  <li>
                    <a href="layout-horizontal.html" target="_blank">
                      Horizontal
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item pcoded-menu-caption">
                <label>UI Element</label>
              </li>
              <li className="nav-item pcoded-hasmenu">
                <a href="#!" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-box"></i>
                  </span>
                  <span className="pcoded-mtext">Basic</span>
                </a>
                <ul className="pcoded-submenu">
                  <li>
                    <a href="bc_alert.html">Alert</a>
                  </li>
                  <li>
                    <a href="bc_button.html">Button</a>
                  </li>
                  <li>
                    <a href="bc_badges.html">Badges</a>
                  </li>
                  <li>
                    <a href="bc_breadcrumb-pagination.html">
                      Breadcrumb & paggination
                    </a>
                  </li>
                  <li>
                    <a href="bc_card.html">Cards</a>
                  </li>
                  <li>
                    <a href="bc_collapse.html">Collapse</a>
                  </li>
                  <li>
                    <a href="bc_carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="bc_grid.html">Grid system</a>
                  </li>
                  <li>
                    <a href="bc_progress.html">Progress</a>
                  </li>
                  <li>
                    <a href="bc_modal.html">Modal</a>
                  </li>
                  <li>
                    <a href="bc_spinner.html">Spinner</a>
                  </li>
                  <li>
                    <a href="bc_tabs.html">Tabs & pills</a>
                  </li>
                  <li>
                    <a href="bc_typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="bc_tooltip-popover.html">Tooltip & popovers</a>
                  </li>
                  <li>
                    <a href="bc_toasts.html">Toasts</a>
                  </li>
                  <li>
                    <a href="bc_extra.html">Other</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item pcoded-menu-caption">
                <label>Forms &amp; table</label>
              </li>
              <li className="nav-item">
                <a href="form_elements.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-file-text"></i>
                  </span>
                  <span className="pcoded-mtext">Forms</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="tbl_bootstrap.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-align-justify"></i>
                  </span>
                  <span className="pcoded-mtext">Bootstrap table</span>
                </a>
              </li>
              <li className="nav-item pcoded-menu-caption">
                <label>Chart & Maps</label>
              </li>
              <li className="nav-item">
                <a href="chart-apex.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-pie-chart"></i>
                  </span>
                  <span className="pcoded-mtext">Chart</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="map-google.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-map"></i>
                  </span>
                  <span className="pcoded-mtext">Maps</span>
                </a>
              </li>
              <li className="nav-item pcoded-menu-caption">
                <label>Pages</label>
              </li>
              <li className="nav-item pcoded-hasmenu">
                <a href="#!" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-lock"></i>
                  </span>
                  <span className="pcoded-mtext">Authentication</span>
                </a>
                <ul className="pcoded-submenu">
                  <li>
                    <a href="auth-signup.html" target="_blank">
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a href="auth-signin.html" target="_blank">
                      Sign in
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="sample-page.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-sidebar"></i>
                  </span>
                  <span className="pcoded-mtext">Sample page</span>
                </a>
              </li>
            </ul>

            <div className="card text-center">
              <div className="card-block">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <i className="feather icon-sunset f-40"></i>
                <h6 className="mt-3">Download Pro</h6>
                <p>Getting more features with pro version</p>
                <a
                  href="https://1.envato.market/qG0m5"
                  // target="_blank"
                  className="btn btn-primary btn-sm text-white m-0"
                >
                  Upgrade Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      {/* <header className="navbar pcoded-header navbar-expand-lg navbar-light header-blue">
        <div className="m-header">
          <a className="mobile-menu" id="mobile-collapse" href="#!">
            <span></span>
          </a>
          <a href="#!" className="b-brand">
            <img src="assets/images/logo.png" alt="" className="logo" />
            <img
              src="assets/images/logo-icon.png"
              alt=""
              className="logo-thumb"
            />
          </a>
          <a href="#!" className="mob-toggler">
            <i className="feather icon-more-vertical"></i>
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#!" className="pop-search">
                <i className="feather icon-search"></i>
              </a>
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control border-0 shadow-none"
                  placeholder="Search hear"
                />
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li>
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href={"#123"}
                  data-toggle="dropdown"
                >
                  <i className="icon feather icon-bell"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right notification">
                  <div className="noti-head">
                    <h6 className="d-inline-block m-b-0">Notifications</h6>
                    <div className="float-right">
                      <a href="#!" className="m-r-10">
                        mark as read
                      </a>
                      <a href="#!">clear all</a>
                    </div>
                  </div>
                  <ul className="noti-body">
                    <li className="n-title">
                      <p className="m-b-0">NEW</p>
                    </li>
                    <li className="notification">
                      <div className="media">
                        <img
                          className="img-radius"
                          src="assets/images/user/avatar-1.jpg"
                          alt="Generic placeholder"
                        />
                        <div className="media-body">
                          <p>
                            <strong>John Doe</strong>
                            <span className="n-time text-muted">
                              <i className="icon feather icon-clock m-r-10"></i>
                              5 min
                            </span>
                          </p>
                          <p>New ticket Added</p>
                        </div>
                      </div>
                    </li>
                    <li className="n-title">
                      <p className="m-b-0">EARLIER</p>
                    </li>
                    <li className="notification">
                      <div className="media">
                        <img
                          className="img-radius"
                          src="assets/images/user/avatar-2.jpg"
                          alt="Generic placeholder "
                        />
                        <div className="media-body">
                          <p>
                            <strong>Joseph William</strong>
                            <span className="n-time text-muted">
                              <i className="icon feather icon-clock m-r-10"></i>
                              10 min
                            </span>
                          </p>
                          <p>Prchace New Theme and make payment</p>
                        </div>
                      </div>
                    </li>
                    <li className="notification">
                      <div className="media">
                        <img
                          className="img-radius"
                          src="assets/images/user/avatar-1.jpg"
                          alt="Generic placeholder "
                        />
                        <div className="media-body">
                          <p>
                            <strong>Sara Soudein</strong>
                            <span className="n-time text-muted">
                              <i className="icon feather icon-clock m-r-10"></i>
                              12 min
                            </span>
                          </p>
                          <p>currently login</p>
                        </div>
                      </div>
                    </li>
                    <li className="notification">
                      <div className="media">
                        <img
                          className="img-radius"
                          src="assets/images/user/avatar-2.jpg"
                          alt="Generic placeholder "
                        />
                        <div className="media-body">
                          <p>
                            <strong>Joseph William</strong>
                            <span className="n-time text-muted">
                              <i className="icon feather icon-clock m-r-10"></i>
                              30 min
                            </span>
                          </p>
                          <p>Prchace New Theme and make payment</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="noti-footer">
                    <a href="#!">show all</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown drp-user">
                <a
                  href={"#123"}
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="feather icon-user"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right profile-notification">
                  <div className="pro-head">
                    <img
                      src="assets/images/user/avatar-1.jpg"
                      className="img-radius"
                      alt="User-Profile"
                    />
                    <span>John Doe</span>
                    <a
                      href="auth-signin.html"
                      className="dud-logout"
                      title="Logout"
                    >
                      <i className="feather icon-log-out"></i>
                    </a>
                  </div>
                  <ul className="pro-body">
                    <li>
                      <a href="user-profile.html" className="dropdown-item">
                        <i className="feather icon-user"></i> Profile
                      </a>
                    </li>
                    <li>
                      <a href="email_inbox.html" className="dropdown-item">
                        <i className="feather icon-mail"></i> My Messages
                      </a>
                    </li>
                    <li>
                      <a href="auth-signin.html" className="dropdown-item">
                        <i className="feather icon-lock"></i> Lock Screen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h5 className="m-b-10">Dashboard Analytics</h5>
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="feather icon-home"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!">Dashboard Analytics</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card support-bar overflow-hidden">
                    <div className="card-body pb-0">
                      <h2 className="m-0">350</h2>
                      <span className="text-c-blue">Support Requests</span>
                      <p className="mb-3 mt-3">
                        Total number of support requests that come in.
                      </p>
                    </div>
                    <div id="support-chart"></div>
                    <div className="card-footer bg-primary text-white">
                      <div className="row text-center">
                        <div className="col">
                          <h4 className="m-0 text-white">10</h4>
                          <span>Open</span>
                        </div>
                        <div className="col">
                          <h4 className="m-0 text-white">5</h4>
                          <span>Running</span>
                        </div>
                        <div className="col">
                          <h4 className="m-0 text-white">3</h4>
                          <span>Solved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card support-bar overflow-hidden">
                    <div className="card-body pb-0">
                      <h2 className="m-0">350</h2>
                      <span className="text-c-green">Support Requests</span>
                      <p className="mb-3 mt-3">
                        Total number of support requests that come in.
                      </p>
                    </div>
                    <div id="support-chart1"></div>
                    <div className="card-footer bg-success text-white">
                      <div className="row text-center">
                        <div className="col">
                          <h4 className="m-0 text-white">10</h4>
                          <span>Open</span>
                        </div>
                        <div className="col">
                          <h4 className="m-0 text-white">5</h4>
                          <span>Running</span>
                        </div>
                        <div className="col">
                          <h4 className="m-0 text-white">3</h4>
                          <span>Solved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h4 className="text-c-yellow">$30200</h4>
                          <h6 className="text-muted m-b-0">All Earnings</h6>
                        </div>
                        <div className="col-4 text-right">
                          <i className="feather icon-bar-chart-2 f-28"></i>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-c-yellow">
                      <div className="row align-items-center">
                        <div className="col-9">
                          <p className="text-white m-b-0">% change</p>
                        </div>
                        <div className="col-3 text-right">
                          <i className="feather icon-trending-up text-white f-16"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h4 className="text-c-green">290+</h4>
                          <h6 className="text-muted m-b-0">Page Views</h6>
                        </div>
                        <div className="col-4 text-right">
                          <i className="feather icon-file-text f-28"></i>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-c-green">
                      <div className="row align-items-center">
                        <div className="col-9">
                          <p className="text-white m-b-0">% change</p>
                        </div>
                        <div className="col-3 text-right">
                          <i className="feather icon-trending-up text-white f-16"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h4 className="text-c-red">145</h4>
                          <h6 className="text-muted m-b-0">Task</h6>
                        </div>
                        <div className="col-4 text-right">
                          <i className="feather icon-calendar f-28"></i>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-c-red">
                      <div className="row align-items-center">
                        <div className="col-9">
                          <p className="text-white m-b-0">% change</p>
                        </div>
                        <div className="col-3 text-right">
                          <i className="feather icon-trending-down text-white f-16"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h4 className="text-c-blue">500</h4>
                          <h6 className="text-muted m-b-0">Downloads</h6>
                        </div>
                        <div className="col-4 text-right">
                          <i className="feather icon-thumbs-down f-28"></i>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-c-blue">
                      <div className="row align-items-center">
                        <div className="col-9">
                          <p className="text-white m-b-0">% change</p>
                        </div>
                        <div className="col-3 text-right">
                          <i className="feather icon-trending-down text-white f-16"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="card table-card">
                <div className="card-header">
                  <h5>Projects</h5>
                  <div className="card-header-right">
                    <div className="btn-group card-option">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal"></i>
                      </button>
                      <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item full-card">
                          <a href="#!">
                            <span>
                              <i className="feather icon-maximize"></i>
                              maximize
                            </span>
                            <span style={{ display: "none" }}>
                              <i className="feather icon-minimize"></i>
                              Restore
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item minimize-card">
                          <a href="#!">
                            <span>
                              <i className="feather icon-minus"></i>
                              collapse
                            </span>
                            <span style={{ display: "none" }}>
                              <i className="feather icon-plus"></i> expand
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item reload-card">
                          <a href="#!">
                            <i className="feather icon-refresh-cw"></i>
                            reload
                          </a>
                        </li>
                        <li className="dropdown-item close-card">
                          <a href="#!">
                            <i className="feather icon-trash"></i> remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>
                            <div className="chk-option">
                              <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                />
                                <span className="custom-control-label"></span>
                              </label>
                            </div>
                            Assigned
                          </th>
                          <th>Name</th>
                          <th>Due Date</th>
                          <th className="text-right">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="chk-option">
                              <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                />
                                <span className="custom-control-label"></span>
                              </label>
                            </div>
                            <div className="d-inline-block align-middle">
                              <img
                                src="assets/images/user/avatar-4.jpg"
                                alt="user"
                                className="img-radius wid-40 align-top m-r-15"
                              />
                              <div className="d-inline-block">
                                <h6>John Deo</h6>
                                <p className="text-muted m-b-0">
                                  Graphics Designer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>Able Pro</td>
                          <td>Jun, 26</td>
                          <td className="text-right">
                            <label className="badge badge-light-danger">
                              Low
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="chk-option">
                              <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                />
                                <span className="custom-control-label"></span>
                              </label>
                            </div>
                            <div className="d-inline-block align-middle">
                              <img
                                src="assets/images/user/avatar-2.jpg"
                                alt="user"
                                className="img-radius wid-40 align-top m-r-15"
                              />
                              <div className="d-inline-block">
                                <h6>Jenifer Vintage</h6>
                                <p className="text-muted m-b-0">Web Designer</p>
                              </div>
                            </div>
                          </td>
                          <td>Mashable</td>
                          <td>March, 31</td>
                          <td className="text-right">
                            <label className="badge badge-light-primary">
                              high
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="chk-option">
                              <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                />
                                <span className="custom-control-label"></span>
                              </label>
                            </div>
                            <div className="d-inline-block align-middle">
                              <img
                                src="assets/images/user/avatar-3.jpg"
                                alt="user"
                                className="img-radius wid-40 align-top m-r-15"
                              />
                              <div className="d-inline-block">
                                <h6>William Jem</h6>
                                <p className="text-muted m-b-0">Developer</p>
                              </div>
                            </div>
                          </td>
                          <td>Flatable</td>
                          <td>Aug, 02</td>
                          <td className="text-right">
                            <label className="badge badge-light-success">
                              medium
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="chk-option">
                              <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                />
                                <span className="custom-control-label"></span>
                              </label>
                            </div>
                            <div className="d-inline-block align-middle">
                              <img
                                src="assets/images/user/avatar-2.jpg"
                                alt="user"
                                className="img-radius wid-40 align-top m-r-15"
                              />
                              <div className="d-inline-block">
                                <h6>David Jones</h6>
                                <p className="text-muted m-b-0">Developer</p>
                              </div>
                            </div>
                          </td>
                          <td>Guruable</td>
                          <td>Sep, 22</td>
                          <td className="text-right">
                            <label className="badge badge-light-primary">
                              high
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="card latest-update-card">
                <div className="card-header">
                  <h5>Latest Updates</h5>
                  <div className="card-header-right">
                    <div className="btn-group card-option">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal"></i>
                      </button>
                      <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item full-card">
                          <a href="#!">
                            <span>
                              <i className="feather icon-maximize"></i>
                              maximize
                            </span>
                            <span style={{ display: "none" }}>
                              <i className="feather icon-minimize"></i>
                              Restore
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item minimize-card">
                          <a href="#!">
                            <span>
                              <i className="feather icon-minus"></i>
                              collapse
                            </span>
                            <span style={{ display: "none" }}>
                              <i className="feather icon-plus"></i> expand
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item reload-card">
                          <a href="#!">
                            <i className="feather icon-refresh-cw"></i>
                            reload
                          </a>
                        </li>
                        <li className="dropdown-item close-card">
                          <a href="#!">
                            <i className="feather icon-trash"></i> remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="latest-update-box">
                    <div className="row p-t-30 p-b-30">
                      <div className="col-auto text-right update-meta">
                        <p className="text-muted m-b-0 d-inline-flex">
                          2 hrs ago
                        </p>
                        <i className="feather icon-twitter bg-twitter update-icon"></i>
                      </div>
                      <div className="col">
                        <a href="#!">
                          <h6>+ 1652 Followers</h6>
                        </a>
                        <p className="text-muted m-b-0">
                          You’re getting more and more followers, keep it up!
                        </p>
                      </div>
                    </div>
                    <div className="row p-b-30">
                      <div className="col-auto text-right update-meta">
                        <p className="text-muted m-b-0 d-inline-flex">
                          4 hrs ago
                        </p>
                        <i className="feather icon-briefcase bg-c-red update-icon"></i>
                      </div>
                      <div className="col">
                        <a href="#!">
                          <h6>+ 5 New Products were added!</h6>
                        </a>
                        <p className="text-muted m-b-0">Congratulations!</p>
                      </div>
                    </div>
                    <div className="row p-b-0">
                      <div className="col-auto text-right update-meta">
                        <p className="text-muted m-b-0 d-inline-flex">
                          2 day ago
                        </p>
                        <i className="feather icon-facebook bg-facebook update-icon"></i>
                      </div>
                      <div className="col">
                        <a href="#!">
                          <h6>+1 Friend Requests</h6>
                        </a>
                        <p className="text-muted m-b-10">
                          This is great, keep it up!
                        </p>
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <tbody>
                              <tr>
                                <td className="b-none">
                                  <a href="#!" className="align-middle">
                                    <img
                                      src="assets/images/user/avatar-2.jpg"
                                      alt="user"
                                      className="img-radius wid-40 align-top m-r-15"
                                    />
                                    <div className="d-inline-block">
                                      <h6>Jeny William</h6>
                                      <p className="text-muted m-b-0">
                                        Graphic Designer
                                      </p>
                                    </div>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <a href="#!" className="b-b-primary text-primary">
                      View all Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h3>$16,756</h3>
                      <h6 className="text-muted m-b-0">
                        Visits
                        <i className="fa fa-caret-down text-c-red m-l-10"></i>
                      </h6>
                    </div>
                    <div className="col-6">
                      <div
                        id="seo-chart1"
                        className="d-flex align-items-end"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h3>49.54%</h3>
                      <h6 className="text-muted m-b-0">
                        Bounce Rate
                        <i className="fa fa-caret-up text-c-green m-l-10"></i>
                      </h6>
                    </div>
                    <div className="col-6">
                      <div
                        id="seo-chart2"
                        className="d-flex align-items-end"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h3>1,62,564</h3>
                      <h6 className="text-muted m-b-0">
                        Products
                        <i className="fa fa-caret-down text-c-red m-l-10"></i>
                      </h6>
                    </div>
                    <div className="col-6">
                      <div
                        id="seo-chart3"
                        className="d-flex align-items-end"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="card table-card review-card">
                <div className="card-header borderless ">
                  <h5>Customer Reviews</h5>
                  <div className="card-header-right">
                    <div className="btn-group card-option">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal"></i>
                      </button>
                      <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item full-card">
                          <a href="#!">
                            <span>
                              <i className="feather icon-maximize"></i>
                              maximize
                            </span>
                            <span style={{ display: "none" }}>
                              <i className="feather icon-minimize"></i>
                              Restore
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item minimize-card">
                          <a href="#!">
                            <span>
                              <i className="feather icon-minus"></i>
                              collapse
                            </span>
                            <span style={{ display: "none" }}>
                              <i className="feather icon-plus"></i> expand
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item reload-card">
                          <a href="#!">
                            <i className="feather icon-refresh-cw"></i>
                            reload
                          </a>
                        </li>
                        <li className="dropdown-item close-card">
                          <a href="#!">
                            <i className="feather icon-trash"></i> remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="review-block">
                    <div className="row">
                      <div className="col-sm-auto p-r-0">
                        <img
                          src="assets/images/user/avatar-2.jpg"
                          alt="user"
                          className="img-radius profile-img cust-img m-b-15"
                        />
                      </div>
                      <div className="col">
                        <h6 className="m-b-15">
                          John Deo{" "}
                          <span className="float-right f-13 text-muted">
                            {" "}
                            a week ago
                          </span>
                        </h6>
                        <a href="#!">
                          <i className="feather icon-star-on f-18 text-c-yellow"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-star-on f-18 text-c-yellow"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-star-on f-18 text-c-yellow"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-star f-18 text-muted"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-star f-18 text-muted"></i>
                        </a>
                        <p className="m-t-15 m-b-15 text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <a href="#!" className="m-r-30 text-muted">
                          <i className="feather icon-thumbs-up m-r-15"></i>
                          Helpful?
                        </a>
                        <a href="#!">
                          <i className="feather icon-heart-on text-c-red m-r-15"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-edit text-muted"></i>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-auto p-r-0">
                        <img
                          src="assets/images/user/avatar-4.jpg"
                          alt="user"
                          className="img-radius profile-img cust-img m-b-15"
                        />
                      </div>
                      <div className="col">
                        <h6 className="m-b-15">
                          Allina D’croze{" "}
                          <span className="float-right f-13 text-muted">
                            {" "}
                            a week ago
                          </span>
                        </h6>
                        <a href="#!">
                          <i className="feather icon-star-on f-18 text-c-yellow"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-star f-18 text-muted"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-star f-18 text-muted"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-star f-18 text-muted"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-star f-18 text-muted"></i>
                        </a>
                        <p className="m-t-15 m-b-15 text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <a href="#!" className="m-r-30 text-muted">
                          <i className="feather icon-thumbs-up m-r-15"></i>
                          Helpful?
                        </a>
                        <a href="#!">
                          <i className="feather icon-heart-on text-c-red m-r-15"></i>
                        </a>
                        <a href="#!">
                          <i className="feather icon-edit text-muted"></i>
                        </a>
                        <blockquote className="blockquote m-t-15 m-b-0">
                          <h6>Allina D’croze</h6>
                          <p className="m-b-0 text-muted">
                            Lorem Ipsum is simply dummy text of the industry.
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="text-right  m-r-20">
                    <a href="#!" className="b-b-primary text-primary">
                      View all Customer Reviews
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="mb-3">Power</h5>
                      <h2>
                        2789<span className="text-muted m-l-5 f-14">kw</span>
                      </h2>
                      <div id="power-card-chart1"></div>
                      <div className="row">
                        <div className="col col-auto">
                          <div className="map-area">
                            <h6 className="m-0">
                              2876 <span> kw</span>
                            </h6>
                            <p className="text-muted m-0">month</p>
                          </div>
                        </div>
                        <div className="col col-auto">
                          <div className="map-area">
                            <h6 className="m-0">
                              234 <span> kw</span>
                            </h6>
                            <p className="text-muted m-0">Today</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="mb-3">Temperature</h5>
                      <h2>
                        7.3<span className="text-muted m-l-10 f-14">deg</span>
                      </h2>
                      <div id="power-card-chart3"></div>
                      <div className="row">
                        <div className="col col-auto">
                          <div className="map-area">
                            <h6 className="m-0">
                              4.5 <span> deg</span>
                            </h6>
                            <p className="text-muted m-0">month</p>
                          </div>
                        </div>
                        <div className="col col-auto">
                          <div className="map-area">
                            <h6 className="m-0">
                              0.5 <span> deg</span>
                            </h6>

                            <p className="text-muted m-0">Today</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card chat-card">
                <div className="card-header">
                  <h5>Chat</h5>
                  <div className="card-header-right">
                    <div className="btn-group card-option">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal"></i>
                      </button>
                      <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item full-card">
                          <a href="#!">
                            <span>
                              <i className="feather icon-maximize"></i>
                              maximize
                            </span>
                            <span style={{ display: "none" }}>
                              <i className="feather icon-minimize"></i>
                              Restore
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item minimize-card">
                          <a href="#!">
                            <span>
                              <i className="feather icon-minus"></i>
                              collapse
                            </span>
                            <span style={{ display: "none" }}>
                              <i className="feather icon-plus"></i> expand
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item reload-card">
                          <a href="#!">
                            <i className="feather icon-refresh-cw"></i>
                            reload
                          </a>
                        </li>
                        <li className="dropdown-item close-card">
                          <a href="#!">
                            <i className="feather icon-trash"></i> remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row m-b-20 received-chat">
                    <div className="col-auto p-r-0">
                      <img
                        src="assets/images/user/avatar-2.jpg"
                        alt="user"
                        className="img-radius wid-40"
                      />
                    </div>
                    <div className="col">
                      <div className="msg">
                        <p className="m-b-0">Nice to meet you!</p>
                      </div>
                      <p className="text-muted m-b-0">
                        <i className="fa fa-clock-o m-r-10"></i>10:20am
                      </p>
                    </div>
                  </div>
                  <div className="row m-b-20 send-chat">
                    <div className="col">
                      <div className="msg">
                        <p className="m-b-0">Nice to meet you!</p>
                      </div>
                      <p className="text-muted m-b-0">
                        <i className="fa fa-clock-o m-r-10"></i>10:20am
                      </p>
                    </div>
                    <div className="col-auto p-l-0">
                      <img
                        src="assets/images/user/avatar-3.jpg"
                        alt="user"
                        className="img-radius wid-40"
                      />
                    </div>
                  </div>
                  <div className="row m-b-20 received-chat">
                    <div className="col-auto p-r-0">
                      <img
                        src="assets/images/user/avatar-2.jpg"
                        alt="user"
                        className="img-radius wid-40"
                      />
                    </div>
                    <div className="col">
                      <div className="msg">
                        <p className="m-b-0">Nice to meet you!</p>
                        <img
                          src="assets/images/widget/dashborad-1.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/widget/dashborad-3.jpg"
                          alt=""
                        />
                      </div>
                      <p className="text-muted m-b-0">
                        <i className="fa fa-clock-o m-r-10"></i>10:20am
                      </p>
                    </div>
                  </div>
                  <div className="form-group m-t-15">
                    <label className="floating-label" htmlFor="Project">
                      Send message
                    </label>
                    <input
                      type="text"
                      name="task-insert"
                      className="form-control"
                      id="Project"
                    />
                    <div className="form-icon">
                      <button className="btn btn-primary btn-icon">
                        <i className="feather icon-message-circle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card user-card2">
                <div className="card-body text-center">
                  <h6 className="m-b-15">Project Risk</h6>
                  <div className="risk-rate">
                    <span>
                      <b>5</b>
                    </span>
                  </div>
                  <h6 className="m-b-10 m-t-10">Balanced</h6>
                  <a href="#!" className="text-c-green b-b-success">
                    Change Your Risk
                  </a>
                  <div className="row justify-content-center m-t-10 b-t-default m-l-0 m-r-0">
                    <div className="col m-t-15 b-r-default">
                      <h6 className="text-muted">Nr</h6>
                      <h6>AWS 2455</h6>
                    </div>
                    <div className="col m-t-15">
                      <h6 className="text-muted">Created</h6>
                      <h6>30th Sep</h6>
                    </div>
                  </div>
                </div>
                <button className="btn btn-success btn-block">
                  Download Overall Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <SimpleMap></SimpleMap>
    </CustomScrollbars>
  );
}

export default App;
