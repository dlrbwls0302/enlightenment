import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  
  {
    title: '로그인',
    path: '/',
    className: 'nav-text',
    icon: <AiIcons.AiFillAccountBook/>
  },
  {
    title: '후보 공약보기',
    path: '/promise',
    className: 'nav-text',
    icon: <AiIcons.AiFillAccountBook/>
  },
  {
    title: '내 투표소 확인',
    path: '/map',
    className: 'nav-text',
    icon: <AiIcons.AiFillAccountBook/>
  },
  {
    title: '뉴스',
    path: '/news',
    className: 'nav-text',
    icon: <AiIcons.AiFillAccountBook/>
  },
  {
    title: '당신의 의견을 남겨주세요',
    path: '/opinion',
    className: 'nav-text',
    icon: <AiIcons.AiFillAccountBook/>
  }
]