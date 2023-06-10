import React from 'react';
import {
  faAddressCard,
  faBagShopping,
  faClockRotateLeft,
  faGear,
  faRightFromBracket,
  faUser,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

const SidebarOptions = () => {
  return (
    <Sidebar
      backgroundColor="#d6dde9"
      width="100%"
      rootStyles={
        {
          // height: '0%',
          // boxShadow: '1px 1px 1px solid #333333',
          // width1
        }
      }
      className="shadow"
    >
      <Menu
        // height="0"
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: '#fee',
              color: '#e11b1e',
            },
            [`&:hover`]: {
              backgroundColor: 'red',
            },
            [`&>span`]: {
              fontSize: '20px',
            },
          },
        }}
      >
        <SubMenu
          label="INFORMATION"
          rootStyles={{
            [`&.ps-open`]: {
              backgroundColor: '#fee',
            },
          }}
          icon={<FontAwesomeIcon icon={faGear} />}
        >
          <MenuItem icon={<FontAwesomeIcon icon={faUser} />} component={<NavLink to="settings" />}>
            {' '}
            PROFILE{' '}
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faAddressCard} />} component={<NavLink to="address" />}>
            {' '}
            ADDRESS{' '}
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<FontAwesomeIcon icon={faBagShopping} />} component={<NavLink to="ordersList" />}>
          {' '}
          HISTORY ORDER{' '}
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faRightFromBracket} />} component={<NavLink to="logout" />}>
          {' '}
          LOG OUT{' '}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarOptions;
