/** ====== Layout das Paginas */
import Layout from '../pages/_layout'

/** ====== Paginas do Component FooterBar Principais */
import PageHome from '../pages/Home'
import PageContact from '../pages/Contact'
import PageAbout from '../pages/About'
import PageOutra from '../pages/Outra'
import PageModal from '../pages/Modal'
import PageTeste1 from '../pages/Teste1'
import PageTeste2 from '../pages/Teste2'

/** ====== Paginas do Component MenuBar Principais */
import PageMenu from '../pages/Menu'
import PageCadastros from '../pages/Cadastros'
import PageOrcamentos from '../pages/Orcamentos'
import PageOservicos from '../pages/Oservicos'
import PageVendas from '../pages/Vendas'
import PageFaturas from '../pages/Faturas'
import PageRelatorios from '../pages/Relatorios'

/**  =======  Imagens do Component MenuPri ==== */
import menu from '../assets/images/menu.svg'
import c128 from '../assets/images/c128.svg'
import o128 from '../assets/images/o128.svg'
import s128 from '../assets/images/s128.svg'
import v128 from '../assets/images/v128.svg'
import f128 from '../assets/images/f128.svg'
import r128 from '../assets/images/r128.svg'

/** ====== Paginas do Component MenuPage */
import PageSpecials from '../pages/Specials '
import PageLogin from '../pages/Login'
import PageHelp from '../pages/Help'

/**  =======  Imagens dos MenuPage  ==== */
import shopping from '../assets/images/shopping.svg'
import semuser from '../assets/images/semuser.svg'
import help from '../assets/images/duvidaW.svg'

/**  =======  Imagens dos Modalenus ==== */
// import config1 from '../assets/images/config1.svg'
// import help from '../assets/images/help.svg'

// import watszap from '../assets/images/watszap.svg'
// import telefone from '../../assets/images/telefone.png'
// import email from '../../assets/images/email.png'
// import internet from '../../assets/images/internet.svg'
// import facebook from '../../assets/images/facebook.svg'
// import instagram from '../../assets/images/instagram.svg'

export const rootRoutes = [
  /*  Link do Footer */
  { exact: true, label: 'Home', path: '/', component: PageHome, layout: Layout },
  { exact: true, label: 'About', path: '/about', component: PageAbout, layout: Layout },
  {
    exact: true,
    label: 'Contato',
    path: '/contact',
    component: PageContact,
    layout: Layout
  },
  { exact: true, label: 'Outra', path: '/outra', component: PageOutra, layout: Layout },
  { exact: true, label: 'Modal', path: '/modal', component: PageModal, layout: Layout },
  { exact: true, label: 'Teste1', path: '/teste1', component: PageTeste1, layout: Layout },
  { exact: true, label: 'Teste2', path: '/teste2', component: PageTeste2, layout: Layout }
]

export const mainRoutes = [
  {
    img: menu,
    exact: true,
    label: 'Menu',
    path: '/Menu',
    component: PageMenu,
    layout: Layout
  },
  {
    img: c128,
    exact: true,
    label: 'Cadastros',
    path: '/cadastros',
    component: PageCadastros,
    layout: Layout
  },
  {
    img: o128,
    exact: true,
    label: 'Orcamentos',
    path: '/orcamentos',
    component: PageOrcamentos,
    layout: Layout
  },
  {
    img: s128,
    exact: true,
    label: 'Oservicos',
    path: '/oservicos',
    component: PageOservicos,
    layout: Layout
  },
  {
    img: v128,
    exact: true,
    label: 'Vendas',
    path: '/vendas',
    component: PageVendas,
    layout: Layout
  },
  {
    img: f128,
    exact: true,
    label: 'Faturas',
    path: '/faturas',
    component: PageFaturas,
    layout: Layout
  },
  {
    img: r128,
    exact: true,
    label: 'Relatorios',
    path: '/relatorios',
    component: PageRelatorios,
    layout: Layout
  }
]

export const homeRoutes = [
  {
    img: shopping,
    exact: true,
    label: 'Specials',
    path: '/specials',
    component: PageSpecials,
    layout: Layout
  },
  {
    img: semuser,
    exact: true,
    label: 'Login',
    path: '/login',
    component: PageLogin,
    layout: Layout
  },
  {
    img: help,
    exact: true,
    label: 'Help.',
    path: '/help',
    component: PageHelp,
    layout: Layout
  }
]

export const userRoutes = [
  { exact: true, label: 'Usuarios', path: '/users', component: PageTeste1, layout: Layout },
  {
    exact: true,
    label: 'Editar usuario',
    path: '/users/store',
    component: PageTeste1,
    layout: Layout
  }
  // {
  //   exact: true,
  //   label: 'Excluir usuario',
  //   path: '/users/delete',
  //   component: PageTeste,
  //   layout: Layout
  // }
]

export const userCompany = [
  { exact: true, label: 'Editar', path: '/company/edit', component: PageOutra, layout: Layout },
  { exact: true, label: 'Excluir', path: '/company/delete', component: PageTeste1, layout: Layout },
  { exact: true, label: 'Listar', path: '/company/list', component: PageTeste1, layout: Layout }
]

export const routeList = [
  ...rootRoutes,
  ...mainRoutes,
  ...homeRoutes,
  ...userRoutes,
  ...userCompany
]
