import React, { useState } from 'react';
import { Collapse, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const SubMenu = ({ icon, title, items }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <NavItem onClick={toggleNavbar} className={classNames({ 'menu-open': !collapsed })}>
        <NavLink className="dropdown-toggle" href="#">
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {title}
        </NavLink>
      </NavItem>
      <Collapse isOpen={!collapsed} navbar className={classNames('items-menu', { 'mb-1': !collapsed })}>
        {items.map((item, index) => (
          // Assuming `item` is a string or a value that can be directly used as a key; if not, consider using a more stable and unique property from `item`.
          <NavItem key={index} className="pl-4">
            <NavLink>{item}</NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
