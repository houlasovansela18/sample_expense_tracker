import React from "react";
import { render } from "react-dom";

function Navbar(){
    return (
        <>
            <nav class="p-0 navbar navbar-light bg-light">
                <div class="container bg-transparent">
                    <div class="p-0">
                        <h2>Balance</h2>
                    </div>
                    <div class="p-0">
                        <a class="navbar-brand" href="#">
                            <img src="./img/user.png" width="30" height="30" class="rounded mx-auto d-block"></img>
                        </a> 
                    </div>
                </div>
            </nav>
            <div class="text-center fs-1 fw-bold" id="balance">$0.00</div>
            <div class="mx-2 p-0 container overflow-hidden rounded bg-dark">
                <div class="row gx-0">
                    <div class="col">
                        <div class="p-1">
                            <div class="text-white text-center fs-1 fw-bold" id="income">$0.00</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-1">
                            <div class="text-white text-center fs-1 fw-bold" id="expense">$0.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

render(<Navbar/>, document.getElementById('react-navbar'));