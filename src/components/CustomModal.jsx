import React from "react";

const CustomModal = ({
    show,
    onHide,
    contacts,
    searchTerm,
    onSearchChange,
    onSearchButtonClick, // Add onSearchButtonClick prop
    onlyEvenChecked,
    onToggleOnlyEven,
    onContactItemClick,
}) => {
    return (
        <div
            className={`modal fade ${show ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: show ? "block" : "none" }}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Contacts</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={onHide}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search contacts..."
                                value={searchTerm}
                                onChange={onSearchChange}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={onSearchButtonClick}
                            >
                                Search
                            </button>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="onlyEven"
                                checked={onlyEvenChecked}
                                onChange={onToggleOnlyEven}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="onlyEven"
                            >
                                Only even
                            </label>
                        </div>
                        <ul className="list-group mt-3">
                            {contacts
                                .filter(
                                    (contact) =>
                                        contact.name
                                            .toLowerCase()
                                            .includes(
                                                searchTerm.toLowerCase()
                                            ) &&
                                        (!onlyEvenChecked ||
                                            contact.id % 2 === 0)
                                )
                                .map((contact) => (
                                    <li
                                        key={contact.id}
                                        className="list-group-item"
                                        onClick={() =>
                                            onContactItemClick(contact)
                                        }
                                    >
                                        {contact.name}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onHide}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;
