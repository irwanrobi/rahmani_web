import axios from "axios";
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux';
import { createOfferMessage } from '../../actions/offers'

import './formoffer.scss';
import DividerSecondary from "../../elements/divider_secondary/DividerSecondary";
import Button from "../../elements/button/Button";

const FormOffer = () => {

    const [offerData, setOfferData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        messageText: ''
    })

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();

    const showModal = () => {
        Swal.fire({
            title: 'SUCCESS!',
            text: 'Pesan berhasil dikirim',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    const errorModal = () => {
        Swal.fire({
            title: 'ERROR!',
            text: 'Masukkan semua data yang dibutuhkan!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }

    const errorConnectionModal = () => {
        Swal.fire({
            title: 'ERROR!',
            text: 'Terjadi error pada koneksi!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }

    const clearForm = () => {
        setOfferData({ firstName: '', lastName: '', email: '', phone: '', messageText: ''
        })
    }

    const handleSubmit_ = (e) => {
        e.preventDefault();
        if (offerData.firstName && offerData.lastName && offerData.email && offerData.phone && offerData.messageText) {
            dispatch(createOfferMessage(offerData));
            showModal();
            clearForm()
        } else {
            errorModal();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!offerData.firstName || !offerData.lastName || !offerData.email || !offerData.phone || !offerData.messageText) {
            errorModal();
            setLoading(false);
        } else {
            axios({
                method: "POST",
                url: "https://formbold.com/s/9X1KM",
                data: {
                    "Nama Depan": offerData.firstName,
                    "Nama Belakang": offerData.lastName,
                    "Email": offerData.email,
                    "Phone": offerData.phone,
                    "Isi Pesan": offerData.messageText
                },
            })
            .then((r) => {
                console.log(offerData);
                showModal();
                clearForm();
                setLoading(false);
            })
            .catch((r) => {
                console.log(r);
                setLoading(false);
                Swal.fire({
                    title: 'ERROR!',
                    text: r,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });
        }
    }
    
    return (
        <section id="form-offer">
            <div className="container bg-primary form-offer">
                <div className="section-title mb-5">
                    <h1>Minta Penawaran</h1>
                    <DividerSecondary isTitle="true" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row gx-5">
                        <div class="col-md-6">
                            <div class="form-floating mb-4">
                                <input type="text" 
                                    class="form-control form-control-lg" 
                                    id="firstnameInput" 
                                    placeholder="Nama Depan" 
                                    required={true}
                                    value={offerData.firstName}
                                    onChange={(e) => setOfferData({ ...offerData, firstName: e.target.value})}
                                />
                                <label htmlFor="firstnameInput">Nama Depan <span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-4">
                                <input type="text" 
                                    class="form-control form-control-lg" 
                                    id="lastnameInput" 
                                    placeholder="Nama Belakang"
                                    required={true} 
                                    value={offerData.lastName}
                                    onChange={(e) => setOfferData({ ...offerData, lastName: e.target.value})}
                                />
                                <label htmlFor="lastnameInput">Nama Belakang <span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row gx-5">
                        <div class="col-md-6">
                            <div class="form-floating mb-4">
                                <input type="email" 
                                    class="form-control form-control-lg" 
                                    id="emailInput" 
                                    placeholder="Alamat Email" 
                                    required={true}
                                    value={offerData.email}
                                    onChange={(e) => setOfferData({ ...offerData, email: e.target.value})}
                                />
                                <label htmlFor="emailInput">Email address <span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-4">
                                <input type="tel" 
                                    class="form-control form-control-lg" 
                                    id="phoneInput" 
                                    placeholder="No. Telepon" 
                                    required={true}
                                    value={offerData.phone}
                                    onChange={(e) => setOfferData({ ...offerData, phone: e.target.value})}
                                />
                                <label htmlFor="phoneInput">No. Telepon <span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row gx-5">
                        <div class="col-md-12">
                            <div class="form-floating mb-4">
                                <textarea class="form-control" 
                                    id="messageInput"
                                    placeholder="Pesan Anda" 
                                    required={true}
                                    value={offerData.messageText}
                                    onChange={(e) => setOfferData({ ...offerData, messageText: e.target.value})}
                                    style={{'height': '150px'}}
                                />
                                <label htmlFor="messageInput">Masukkan detail permintaan Anda <span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <Button
                            className="text-decoration-none py-3"
                            isSecondary="yes"
                            isLarge="yes"
                            isBlock="yes"
                            type="submit"
                        >
                            { loading == true ?
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            : 'Submit Penawaran'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormOffer
