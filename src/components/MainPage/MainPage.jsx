import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import List from '../List/List';
import ModalItem from '../ModalItem/ModalItem';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import Footer from '../Footer/Footer';

const MainPage = (props) => {
  const {
    search,
    status,
    priority,
    currentId,
    currentTitle,
    currentDescription,
    currentPriority,
    currentStatus,
    modalShow,
    todoList,
    handleSelect,
    showModalArea,
    addItem,
    deleteItem,
    onToggleDone,
    setCurrentFields,
    clearModalField,
    setCurrentId,
  } = props;
  return (
    <>
      <HeaderTitle />
      <Header
        search={search}
        status={status}
        priority={priority}
        handleSelect={handleSelect}
        showModalArea={showModalArea}
      />
      <List
        setCurrentFields={setCurrentFields}
        addItem={addItem}
        todoList={todoList}
        deleteItem={deleteItem}
        onToggleDone={onToggleDone}
      />
      <ModalItem
        currentId={currentId}
        currentTitle={currentTitle}
        currentDescription={currentDescription}
        currentPriority={currentPriority}
        currentStatus={currentStatus}
        modalShow={modalShow}
        handleSelect={handleSelect}
        addItem={addItem}
        clearModalField={clearModalField}
        setCurrentId={setCurrentId}
      />
      <Footer />
    </>
  );
};

MainPage.defaultProps = {
  currentId: '',
}

MainPage.propTypes = {
  search: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  currentId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  currentTitle: PropTypes.string.isRequired,
  currentDescription: PropTypes.string.isRequired,
  currentPriority: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
  modalShow: PropTypes.bool.isRequired,
  todoList: PropTypes.instanceOf(Array).isRequired,
  handleSelect: PropTypes.func.isRequired,
  showModalArea: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  setCurrentFields: PropTypes.func.isRequired,
  clearModalField: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired,
}

export default MainPage;
