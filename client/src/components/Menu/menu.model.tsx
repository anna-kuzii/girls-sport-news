export interface IMenuData {
  id: string;
  title: string;
  menu?: IMenuData[];
}

export interface IMenuMobileProps {
  title: string;
  menuList: IMenuData[];
}

export interface IMenuItemMobileProps {
  item: IMenuData;
  setActiveItem: (title: string, submenu: IMenuData[]) => void;
}

export interface IMenuItemProps {
  item: IMenuData;
  index: number;
  activeItem: number;
  setActiveItem: (index: number) => void;
}

export interface IMenuState {
  title: string;
  submenu: IMenuData[];
}

export interface IMenuMobileState {
  activeItemTitle: string;
  activeItemSubMenu: IMenuData[];
  numberOfStep: number;
  arrayOfStates: IMenuState[];
  menuIsOpen: boolean;
}

export interface IMenuDesktopState {
  activeIndex: number;
}

export interface IMenuDesktopProps {
  menuList: IMenuData[];
}
