import React from 'react';
import './formoffer.scss';
import DividerSecondary from "../../elements/divider_secondary/DividerSecondary";
import Button from "../../elements/button/Button";

const FormOffer = () => {
    return (
        <section id="form-offer">
            <div className="container bg-primary form-offer">
                <div className="section-title mb-5">
                    <h1>Minta Penawaran</h1>
                    <DividerSecondary isTitle="true" />
                </div>
                <form action="">
                    <div className="form-group row gx-5 mb-4">
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control form-control-lg" id="firstnameInput" placeholder="Nama Depan" />
                                <label for="firstnameInput">Nama Depan</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control form-control-lg" id="lastnameInput" placeholder="Nama Belakang" />
                                <label for="lastnameInput">Nama Belakang</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row gx-5 mb-4">
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control form-control-lg" id="emailInput" placeholder="Alamat Email" />
                                <label for="emailInput">Email address</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="tel" class="form-control form-control-lg" id="phoneInput" placeholder="No. Telepon" />
                                <label for="phoneInput">No. Telepon</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <Button
                            className="text-decoration-none py-3"
                            href=""
                            type="link"
                            isSecondary="yes"
                            isLarge="yes"
                            isBlock="yes"
                        >Submit Penawaran</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormOffer
