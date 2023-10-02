import React from 'react';
import { useParams } from 'react-router-dom';
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
} from "@fortawesome/free-solid-svg-icons";

function PropertyDetails() {
  // Get the 'id' parameter from the URL using useParams
  const { id } = useParams();
  console.log(id);

  const properties = [
    // Add new property objects here
    // Example:
    { 
        id: 1,
        image:"/images/1.jpeg",
        description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

            Features and Amenities:
            
            Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
            
            Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
            
            Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
            
            Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
            
            Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
            
            Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
            
            Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
            
            Why Choose Luxe Haven Hotel:
            
            At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
            
            Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
            
            Book your stay with us today and elevate your journey.`,
        cardMode:"for rent",
        popularMode:true,
        location:"8558 pecan state",
        name: "RCE theaters, 907 backford Dr handerson, NC 27536",
        price:"7255",
        roomType:"3 room",
        bedType:"1 bed",
        bathroomType:"1 bath",
        area:"732 sft"

    },
    { 
        id: 2,
        image:"/images/2.jpeg",
        cardMode:"for rent",
        description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

        Features and Amenities:
        
        Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
        
        Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
        
        Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
        
        Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
        
        Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
        
        Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
        
        Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
        
        Why Choose Luxe Haven Hotel:
        
        At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
        
        Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
        
        Book your stay with us today and elevate your journey.`,
        popularMode:false,
        location:"8558 pecan state",
        name: "RCE theaters, 907 backford Dr handerson, NC 27536",
        price:"7255",
        roomType:"3 room",
        bedType:"1 bed",
        bathroomType:"1 bath",
        area:"732 sft"

    },
    { 
        id: 3,
        image:"/images/3.jpeg",
        description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

        Features and Amenities:
        
        Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
        
        Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
        
        Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
        
        Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
        
        Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
        
        Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
        
        Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
        
        Why Choose Luxe Haven Hotel:
        
        At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
        
        Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
        
        Book your stay with us today and elevate your journey.`,
        cardMode:"for rent",
        popularMode:true,
        location:"8558 pecan state",
        name: "RCE theaters, 907 backford Dr handerson, NC 27536",
        price:"7255",
        roomType:"3 room",
        bedType:"1 bed",
        bathroomType:"1 bath",
        area:"732 sft"

    },
    { 
        id: 4,
        image:"/images/4.jpeg",
        description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

        Features and Amenities:
        
        Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
        
        Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
        
        Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
        
        Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
        
        Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
        
        Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
        
        Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
        
        Why Choose Luxe Haven Hotel:
        
        At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
        
        Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
        
        Book your stay with us today and elevate your journey.`,
        cardMode:"for rent",
        popularMode:false,
        location:"8558 pecan state",
        name: "RCE theaters, 907 backford Dr handerson, NC 27536",
        price:"7255",
        roomType:"3 room",
        bedType:"1 bed",
        bathroomType:"1 bath",
        area:"732 sft"

    },
    { 
        id: 5,
        image:"/images/5.jpeg",
        description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

        Features and Amenities:
        
        Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
        
        Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
        
        Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
        
        Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
        
        Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
        
        Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
        
        Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
        
        Why Choose Luxe Haven Hotel:
        
        At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
        
        Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
        
        Book your stay with us today and elevate your journey.`,
        cardMode:"for rent",
        popularMode:false,
        location:"8558 pecan state",
        name: "RCE theaters, 907 backford Dr handerson, NC 27536",
        price:"7255",
        roomType:"3 room",
        bedType:"1 bed",
        bathroomType:"1 bath",
        area:"732 sft"

    },
    { 
        id: 6,
        image:"/images/6.jpeg",
        description:`Welcome to the Luxe Haven Hotel, your haven of luxury and comfort nestled in the heart of a vibrant city. Our hotel is a perfect blend of modern elegance and timeless charm, offering you a memorable stay that combines style, convenience, and top-notch hospitality.

        Features and Amenities:
        
        Elegant Accommodations: Our well-appointed rooms and suites are designed to provide you with the utmost comfort and relaxation. Sink into plush bedding, enjoy stunning city views, and unwind in style.
        
        Gourmet Dining: Savor exquisite cuisine at our in-house restaurant, where our talented chefs craft a diverse menu of culinary delights. From international dishes to local specialties, every meal is a culinary journey.
        
        Relaxation and Wellness: Rejuvenate your body and mind at our spa and fitness center. Indulge in therapeutic massages, take a dip in our pool, or maintain your workout routine in our state-of-the-art fitness facility.
        
        Event Spaces: Whether you're hosting a corporate meeting or a grand celebration, our versatile event spaces are equipped to accommodate your needs. Our dedicated event staff will ensure your occasion is a success.
        
        Concierge Service: Our attentive concierge team is available 24/7 to assist with reservations, local recommendations, and any special requests you may have.
        
        Prime Location: Enjoy easy access to the city's attractions, shopping districts, and entertainment hubs. We are ideally situated for both business and leisure travelers.
        
        Complimentary Wi-Fi: Stay connected with high-speed internet access available throughout the hotel.
        
        Why Choose Luxe Haven Hotel:
        
        At Luxe Haven Hotel, we believe in creating unforgettable experiences for our guests. Whether you're traveling for business or leisure, our commitment to excellence ensures that your stay is marked by comfort, convenience, and luxury.
        
        Discover the essence of hospitality at Luxe Haven Hotel, where every moment is designed to make you feel at home while indulging in the finest the city has to offer.
        
        Book your stay with us today and elevate your journey.`,
        cardMode:"for rent",
        popularMode:true,
        location:"8558 pecan state",
        name: "RCE theaters, 907 backford Dr handerson, NC 27536",
        price:"7255",
        roomType:"3 room",
        bedType:"1 bed",
        bathroomType:"1 bath",
        area:"732 sft"

    },
  ];

  // Find the property with the matching ID
  const property = properties.find((prop) => prop.id === parseInt(id));

  if (!property) {
    // Property not found
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details-card">
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
        <h3 className="property-details-name">{property.name}</h3>
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
          <p className="property-description">{property.description}</p>
        <div className="property-price-section">
          <div className="price-flex">
            <FontAwesomeIcon icon={faDollarSign} className="light-icon" />
            <div className="price-value">{property.price}</div>
            /months
            <button className="property-read-more">Book now</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
