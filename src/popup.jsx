import React from "react";
import { render } from "react-dom";

function history() {

    const history = [{"description":"salary income","amount": 3000,"date":"30 Dec 2021"}, 
                    {"description":"buying shoes","amount": -500,"date":"19 Dec 2021"}, 
                    {"description":"buy tv","amount": -2000,"date":"27 Dec 2021"}
                ]
    const historyList = history.map(history => <li className="border-bottom border-dark">
        <div className="clearfix">
            <div className="float-start">{history.description}</div>
            <div className="float-end"> 
                {history.amount} $
                <span className="ms-3 fs-6" type="button">X</span>
            </div>
        </div>
        <div>
            {history.date}
        </div>
        </li>)
    
    return (
        <ul className="list-group">{historyList}</ul>
    )
}


function Navbar(){
    return (
        <>
            <div className="container px-3">
                <div className="my-2 clearfix">
                    <div className="float-start">
                        <span className="fs-4">Expense Tracker</span>
                    </div>
                    <div className="float-end">
                        <a className="bg-transparent" href="#">
                            <img src="https://cdn-icons.flaticon.com/png/512/552/premium/552721.png?token=exp=1640510115~hmac=ed7364a3cdc5f8404e44da811d63366c" width="30" height="30" class="rounded-circle mx-auto d-block"></img>
                        </a> 
                    </div>
                </div>
                <div className="py-2">
                    <div className="text-center fs-6 fw-light">BALANCE</div>
                    <div className="text-center display-2" id="balance">$ 400.00</div>
                </div>
                <div className="text-center py-4 px-0 container overflow-hidden rounded-3 bg-dark">
                    <div className="row gx-0">
                        <div className="col">
                            <div className="">
                                <div className="text-white text-center fs-2 fw-bold" id="income">$ 0.00</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="">
                                <div class="text-white text-center fs-2 fw-bold" id="expense">$ 0.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bg-transparent py-2 clearfix">
                        <div className="float-start">
                            <label className="fs-4">HISTORY</label>
                        </div>
                        <div className="float-end fw-lighter">
                            <span type="button">See all</span>
                        </div>
                </div>
                <div className="container py-2">
                    {history()}
                </div>
                <div className="container py-2">
                    <label className="fs-4">ADD TRANSACTION</label>
                </div>
                <div className="container">
                    <div class="my-2 input-group">
                        <input type="text" class="form-control" aria-label="description" placeholder="description"></input>
                    </div>
                    <div class="my-2 input-group">
                        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="amount"></input>
                        <span class="input-group-text">$</span>
                    </div>
                </div>
                <div class="container my-3 clearfix">
                    <span type="button" class="btn btn-success float-start">INCOME</span>
                    <span type="button" class="btn btn-danger float-end">EXPENSE</span>
                </div>
            </div>
        </>
    );
}

render(<Navbar/>, document.getElementById('react-navbar'));