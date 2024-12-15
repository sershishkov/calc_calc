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
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
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
}: Readonly<{
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toggleDrawer: Function;
}>) {
  const router = useRouter();
  const session = useSession();
  const pathname = usePathname();
  const user = session.data?.user;
  const [openAuth, setOpenAuth] = useState<boolean>(false);

  const onLogout = () => {
    signOut();
    router.push('/');
  };

  const [openLinksLevel_1, setOpenLinksLevel_1] = useState<boolean>(false);
  const [openLinksLevel_2, setOpenLinksLevel_2] = useState<boolean>(false);
  const [openLinksLevel_3, setOpenLinksLevel_3] = useState<boolean>(false);
  const [openLinksLevel_4, setOpenLinksLevel_4] = useState<boolean>(false);
  const [openLinksLevel_5, setOpenLinksLevel_5] = useState<boolean>(false);
  const [openLinksLevel_6, setOpenLinksLevel_6] = useState<boolean>(false);
  const [openLinksLevel_7, setOpenLinksLevel_7] = useState<boolean>(false);
  const [openLinksLevel_8, setOpenLinksLevel_8] = useState<boolean>(false);
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
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                href='/user/statistic'
                onClick={() => toggleDrawer(false)}
              >
                <ListItemIcon>
                  <QuestionMarkIcon />
                </ListItemIcon>
                <ListItemText primary='Статистика' />
              </ListItemButton>
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
        onClick={() => setOpenLinksLevel_1(!openLinksLevel_1)}
        className={
          pathname.includes('level_1') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 1' />
        {openLinksLevel_1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLinksLevel_1} timeout='auto' unmountOnExit>
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
        onClick={() => setOpenLinksLevel_2(!openLinksLevel_2)}
        className={
          pathname.includes('level_2') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 2' />
        {openLinksLevel_2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLinksLevel_2} timeout='auto' unmountOnExit>
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
        onClick={() => setOpenLinksLevel_3(!openLinksLevel_3)}
        className={
          pathname.includes('level_3') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 3' />
        {openLinksLevel_3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLinksLevel_3} timeout='auto' unmountOnExit>
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
        onClick={() => setOpenLinksLevel_4(!openLinksLevel_4)}
        className={
          pathname.includes('level_4') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 4' />
        {openLinksLevel_4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLinksLevel_4} timeout='auto' unmountOnExit>
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
        onClick={() => setOpenLinksLevel_5(!openLinksLevel_5)}
        className={
          pathname.includes('level_5') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 5' />
        {openLinksLevel_5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLinksLevel_5} timeout='auto' unmountOnExit>
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
        onClick={() => setOpenLinksLevel_6(!openLinksLevel_6)}
        className={
          pathname.includes('level_6') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 6' />
        {openLinksLevel_6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLinksLevel_6} timeout='auto' unmountOnExit>
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
        onClick={() => setOpenLinksLevel_7(!openLinksLevel_7)}
        className={
          pathname.includes('level_7') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 7' />
        {openLinksLevel_7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLinksLevel_7} timeout='auto' unmountOnExit>
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
        onClick={() => setOpenLinksLevel_8(!openLinksLevel_8)}
        className={
          pathname.includes('level_8') ? classes.list_header : undefined
        }
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 8' />
        {openLinksLevel_8 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLinksLevel_8} timeout='auto' unmountOnExit>
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
