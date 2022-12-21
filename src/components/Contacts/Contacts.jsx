import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

function Contacts({ contactsList, children, removeContact }) {
  const handleDeleteBtnClick = evt => {
    removeContact(evt.currentTarget.dataset.id);
  };

  return (
    <div>
      {children}
      <ul className={css.contactsList}>
        {contactsList.map(({ id, name, number }) => (
          <li key={id}>
            {name} {number}{' '}
            <button
              className={css.delete_btn}
              data-id={id}
              onClick={evt => handleDeleteBtnClick(evt)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default Contacts;
