import React from "react";

function CardDetails({price}) {
    return <>
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{price.plan}</h5>
                <h6 className="card-price text-center">${price.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className=""><span className="fa-li"><i className="fas fa-check"></i></span>{price.plan == "FREE" ? <>{price.user}</> : <strong>{price.user}</strong>}</li>
              <li className=""><span className="fa-li"><i className="fas fa-check"></i></span>{price.storage} Storage</li>
              <li className=""><span className="fa-li"><i className="fas fa-check"></i></span>{price.publicProjects}</li>
              <li className=""><span className="fa-li"><i className="fas fa-check"></i></span>{price.communityAccess}</li>
              {(price.plan == "FREE") ? 
              <li className="notaccess"><span className="fa-li"><i className="fas fa-times"></i></span>{price.privateProjects}</li> : <li className=""><span className="fa-li"><i className="fas fa-check"></i></span>{price.privateProjects}</li>}
              {(price.plan == "FREE") ? 
              <li className="notaccess"><span className="fa-li"><i className="fas fa-times"></i></span>{price.phoneSupport}</li> : <li className=""><span className="fa-li"><i className="fas fa-check"></i></span>{price.phoneSupport}</li>}
              {(price.plan == "FREE") ? 
              <li className="notaccess"><span className="fa-li"><i className="fas fa-times"></i></span>{price.subDomain}</li> : <li className=""><span className="fa-li"><i className="fas fa-check"></i></span>{price.subDomain}</li>}
              {(price.plan == "FREE" || price.plan == "PLUS") ? 
              <li className="notaccess"><span className="fa-li"><i className="fas fa-times"></i></span>{price.reports}</li> : <li className=""><span className="fa-li"><i className="fas fa-check"></i></span>{price.reports}</li>}
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default CardDetails;