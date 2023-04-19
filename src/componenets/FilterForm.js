import React from 'react'
import { useState } from 'react'
const FilterForm = () => {
    const [rangeval, setrangeval] = useState(50);
    const [rate, setrate] = useState(0);
    const [review, setreview] = useState(0);
    const [delivery, setdelivery] = useState(0);
    function RangeVal() {
        var val = document.querySelector('.filter-range').value;
        setrangeval(val);
    }
    function RateVal() {
        var val = document.querySelector('.rate-range').value;
        setrate(val);
    }
    function RevVal() {
        var val = document.querySelector('.review-range').value;
        setreview(val);
    }
    function DelVal() {
        var val = document.querySelector('.del-range').value;
        setdelivery(val);
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="Rating" className="form-label">Rating above({rate})</label>
                    <input type="range" className="form-range rate-range" value={rate} onChange={RateVal} min="0" max="5" step="1" id="customRange3" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Reviews" className="form-label">Reviews(more than {review})</label>
                    <input type="range" value={review} onChange={RevVal} className="form-range review-range" id="customRange1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="range" className="form-label">Set range(within {rangeval}km)</label>
                    <input type="range" onChange={RangeVal} value={rangeval} className="form-range filter-range" id="range" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Rating" className="form-label">Delivery time(within {delivery} days)</label>
                    <input type="range" value={delivery} onChange={DelVal} className="form-range del-range" id="customRange1" max={10} />
                </div>
                <div className="mb-3">
                    <p className="form-label">Budget</p>
                    <div className="btn-group btn-group-sm">
                        <button type="button" className="btn btn-outline-primary">Low-High</button>
                        <button type="button" className="btn btn-outline-primary">High-Low</button>
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Custom
                        </button>
                    </div>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">min</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">max</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Apply</button>
            </form>
        </div>
    )
}

export default FilterForm
