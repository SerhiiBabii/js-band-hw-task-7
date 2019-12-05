import React from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import ModalItem from '../ModalItem/ModalItem';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import Footer from '../Footer/Footer';

const MainPage = () => {
  return (
    <>
      <HeaderTitle />
      <Header />
      <List />
      <ModalItem />
      <Footer />
    </>
  );
};

export default MainPage;
