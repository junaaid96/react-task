import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomModal from "./CustomModal";

const Problem2 = () => {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);
    const [showModalC, setShowModalC] = useState(false);
    const [contactsA, setContactsA] = useState([]);
    const [contactsB, setContactsB] = useState([]);
    const [searchTermA, setSearchTermA] = useState("");
    const [searchTermB, setSearchTermB] = useState("");
    const [onlyEvenChecked, setOnlyEvenChecked] = useState(false);

    useEffect(() => {
        axios
            .get("https://contact.mediusware.com/api/contacts")
            .then((response) => {
                setContactsA(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("https://contact.mediusware.com/api/contacts?country=US")
            .then((response) => {
                setContactsB(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleAllContactClick = () => {
        setShowModalA(true);
        setShowModalB(false);
        setShowModalC(false);
    };

    const handleUSContactClick = () => {
        setShowModalA(false);
        setShowModalB(true);
        setShowModalC(false);
    };

    const handleCloseClick = () => {
        setShowModalA(false);
        setShowModalB(false);
        setShowModalC(false);
    };

    const handleContactItemClick = () => {
        setShowModalC(true);
    };

    const handleSearchChangeA = (event) => {
        setSearchTermA(event.target.value);
    };

    const handleSearchChangeB = (event) => {
        setSearchTermB(event.target.value);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg btn-outline-primary btn-all-contacts"
                        type="button"
                        onClick={handleAllContactClick}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg btn-outline-warning btn-us-contacts"
                        type="button"
                        onClick={handleUSContactClick}
                    >
                        US Contacts
                    </button>
                </div>

                {showModalA && (
                    <CustomModal
                        show={showModalA}
                        onHide={handleCloseClick}
                        contacts={contactsA}
                        searchTerm={searchTermA}
                        onSearchChange={handleSearchChangeA}
                        onlyEvenChecked={onlyEvenChecked}
                        onContactItemClick={handleContactItemClick}
                    />
                )}

                {showModalB && (
                    <CustomModal
                        show={showModalB}
                        onHide={handleCloseClick}
                        contacts={contactsB}
                        searchTerm={searchTermB}
                        onSearchChange={handleSearchChangeB}
                        onlyEvenChecked={onlyEvenChecked}
                        onContactItemClick={handleContactItemClick}
                    />
                )}

                {showModalC && (
                    <div className="modal">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Contact Details
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={handleCloseClick}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div>Contact Details for Modal C</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Problem2;