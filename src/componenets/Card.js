import React from 'react'
const Card = (props) => {

    return (
        <div>
            <div className="card my-3" style={{ width: '18rem' }}>
                <img src="https://1.bp.blogspot.com/-PPYwmApr-w8/X-xS0MczEzI/AAAAAAAADCM/vrA141x5khUZ51Lw7bimxdus8jhDZAgLQCNcBGAsYHQ/s842/eng%2B12th_00000.png" className="card-img-top" alt="..." height={'300px'} />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.name}
                    </h5>
                    <p className="card-text">
                        {props.text}
                    </p>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Rating:{props.rating}({props.reviews})
                    </h6>
                </div>
            </div>
        </div>
    )
}
export default Card
