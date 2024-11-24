import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import classes from './styles.module.scss';

import {
  links_level_1,
  links_level_2,
  links_level_3,
  links_level_4,
  links_level_5,
  links_level_6,
  links_level_7,
  links_level_8,
} from '@/constants/constants';

export default function NavigationList({
  toggleDrawer,
}: {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toggleDrawer: Function;
}) {
  const router = useRouter();
  const session = useSession();
  const pathname = usePathname();
  const user = session.data?.user;
  const [openAuth, setOpenAuth] = useState<boolean>(false);

  const onLogout = () => {
    signOut();
    router.push('/');
  };

  const [open__links_level_1, set__open__links_level_1] =
    useState<boolean>(false);
  const [open__links_level_2, set__open__links_level_2] =
    useState<boolean>(false);
  const [open__links_level_3, set__open__links_level_3] =
    useState<boolean>(false);
  const [open__links_level_4, set__open__links_level_4] =
    useState<boolean>(false);
  const [open__links_level_5, set__open__links_level_5] =
    useState<boolean>(false);
  const [open__links_level_6, set__open__links_level_6] =
    useState<boolean>(false);
  const [open__links_level_7, set__open__links_level_7] =
    useState<boolean>(false);
  const [open__links_level_8, set__open__links_level_8] =
    useState<boolean>(false);
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      onClick={() => toggleDrawer(false)}
    >
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <ListItemButton onClick={() => setOpenAuth(!openAuth)}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary='Пользователь' />
        {openAuth ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAuth} timeout='auto' unmountOnExit>
        <List disablePadding>
          {user ? (
            <>
              {/* <ListItemButton
                // sx={{ pl: 4 }}
                component={Link}
                href='/user'
                onClick={() => toggleDrawer(false)}
              >
                <ListItemIcon>
                  <QuestionMarkIcon />
                </ListItemIcon>
                <ListItemText primary='Информация' />
              </ListItemButton> */}
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  toggleDrawer(false);
                  onLogout();
                }}
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary='Выход' />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                href='/user/profile/updatedetails'
                onClick={() => toggleDrawer(false)}
              >
                <ListItemIcon>
                  <PersonPinIcon />
                </ListItemIcon>
                <ListItemText primary={user.name} />
              </ListItemButton>
            </>
          ) : (
            <>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                href='/auth/register'
                onClick={() => toggleDrawer(false)}
              >
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <ListItemText primary='Регистрация' />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                href='/auth/login'
                onClick={() => toggleDrawer(false)}
              >
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary='Вход' />
              </ListItemButton>
            </>
          )}
        </List>
      </Collapse>
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <ListItemButton
        onClick={() => set__open__links_level_1(!open__links_level_1)}
        className={
          pathname.includes('level_1') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 1' />
        {open__links_level_1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_1} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_1.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{
                pl: 4,
              }}
              className={pathname === item.link ? classes.list_item : undefined}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_2(!open__links_level_2)}
        className={
          pathname.includes('level_2') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 2' />
        {open__links_level_2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_2} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_2.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{
                pl: 4,
              }}
              className={pathname === item.link ? classes.list_item : undefined}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_3(!open__links_level_3)}
        className={
          pathname.includes('level_3') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 3' />
        {open__links_level_3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_3} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_3.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{
                pl: 4,
              }}
              className={pathname === item.link ? classes.list_item : undefined}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_4(!open__links_level_4)}
        className={
          pathname.includes('level_4') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 4' />
        {open__links_level_4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_4} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_4.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{
                pl: 4,
              }}
              className={pathname === item.link ? classes.list_item : undefined}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_5(!open__links_level_5)}
        className={
          pathname.includes('level_5') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 5' />
        {open__links_level_5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_5} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_5.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{
                pl: 4,
              }}
              className={pathname === item.link ? classes.list_item : undefined}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_6(!open__links_level_6)}
        className={
          pathname.includes('level_6') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 6' />
        {open__links_level_6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_6} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_6.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{
                pl: 4,
              }}
              className={pathname === item.link ? classes.list_item : undefined}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_7(!open__links_level_7)}
        className={
          pathname.includes('level_7') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 7' />
        {open__links_level_7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_7} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_7.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{
                pl: 4,
              }}
              className={pathname === item.link ? classes.list_item : undefined}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_8(!open__links_level_8)}
        className={
          pathname.includes('level_8') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 8' />
        {open__links_level_8 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_8} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_8.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{
                pl: 4,
              }}
              className={pathname === item.link ? classes.list_item : undefined}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
