import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faDollarSign,
  faShower,
  faAreaChart,
  faBuilding,
  faLocation,
  faLandmark,
  faLocationPin,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"; // Import the desired FontAwesome icons

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      {property.popularMode && <div className="popular-badge">Popular</div>}
      <div className="popular-wishlist-badge">
        <FontAwesomeIcon icon={faHeart} className="light-mode" />
      </div>
      {property.cardMode && (
        <div className="cardMode-badge">{property.cardMode}</div>
      )}
      <img
        src={property.image}
        alt={property.name}
        className="property-image"
      />
      
      {property.location && (
        <div className="">
          <FontAwesomeIcon icon={faLocationPin} className="light-icon" />
          {property.location}
        </div>
      )}

      <div className="property-details">
        <h3 className="property-name">{property.name}</h3>
        <div className="property-features">
          {property.roomType && (
            <div className="">
              <FontAwesomeIcon icon={faBuilding} className="light-icon" />
              {property.roomType}
            </div>
          )}
          {property.bedType && (
            <div className="">
              <FontAwesomeIcon icon={faBed} className="light-icon" />
              {property.bedType}
            </div>
          )}
          {property.bathroomType && (
            <div className="">
              <FontAwesomeIcon icon={faShower} className="light-icon" />
              {property.bathroomType}
            </div>
          )}
          {property.area && (
            <div className="">
              <FontAwesomeIcon icon={faAreaChart} className="light-icon" />
              {property.area}
            </div>
          )}
        </div>
        <hr />
        <div className="price-section">
          <div className="price-flex">
            <FontAwesomeIcon icon={faDollarSign} className="light-icon" />
            <div className="price-value">{property.price}</div>
            /months
      <Link to={`/property/${property.id}`}>
            <button className="read-more">Read more</button>
      </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
