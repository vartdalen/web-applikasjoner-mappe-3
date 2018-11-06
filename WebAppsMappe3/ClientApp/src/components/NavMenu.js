﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>WebAppsMappe3</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/ask'}>
              <NavItem>
                <Glyphicon glyph='question-sign' /> Ask
              </NavItem>
            </LinkContainer>
			<LinkContainer to={'/faq'}>
				<NavItem>
					<Glyphicon glyph='th-list' /> FAQ
				</NavItem>
			</LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}