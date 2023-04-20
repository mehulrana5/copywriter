import React from 'react'
import FilterForm from './FilterForm'
const FilterPage = () => {
    return (
        <div>
            <div className="modal fade" id="filter-page" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filters</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FilterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterPage
