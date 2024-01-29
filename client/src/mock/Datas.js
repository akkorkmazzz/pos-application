import { HomePageIcon, ShopIcon, InvoiceIcon, UserIcon, StatisticsIcon, LogoutIcon } from '../utils/iconUtils.js';

export const filterBarDatas = [
    {
        name: "Tümü",
        id: 1
    },
    {
        name: "Yiyecek",
        id: 2
    },
    {
        name: "İçecek",
        id: 3
    },
    {
        name: "Meyve",
        id: 4
    },
    {
        name: "Sebze",
        id: 5
    },
    {
        name: "Kıyafet",
        id: 6
    },
    {
        name: "Elektronik",
        id: 7
    },
]

export const menuDatas = [
    {
        icon: <HomePageIcon style={{height: "22px"}} />,
        title: "Ana Sayfa"
    },
    {
        icon: <ShopIcon style={{height: "22px"}} />,
        title: "Sepet"
    },
    {
        icon: <InvoiceIcon style={{height: "22px"}} />,
        title: "Faturalar"
    },
    {
        icon: <UserIcon style={{height: "22px"}} />,
        title: "Müşteriler"
    },
    {
        icon: <StatisticsIcon style={{height: "22px"}} />,
        title: "İstatistikler"
    },
    {
        icon: <LogoutIcon style={{height: "22px"}} />,
        title: "Çıkış"
    }
]